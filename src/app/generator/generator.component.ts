import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';
import {Observable} from 'rxjs/Observable';
import {WindowRefService} from '../window-ref.service'

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent extends SuperComponent implements OnInit {

  namesURL: string = 'https://raw.githubusercontent.com/dominictarr/random-name/master/names.json';
  firstnamesURL: string = 'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.json';
  middlenamesURL: string = 'https://raw.githubusercontent.com/dominictarr/random-name/master/middle-names.json';
  placesURL: string = 'https://raw.githubusercontent.com/dominictarr/random-name/master/places.json';
  names: string[];
  firstnames: string[];
  middlenames: string[];
  places: string[];

  count: number;
  index: String;
  type: String;
  existingIndexUsed: boolean;
  aliases: Map<string, any> = new Map<string, any>();
  inProgress: number;
  bulk: string = '';

  constructor(private _httpService: HttpService, private _windowRefService: WindowRefService) {
    super();
    this.count = 10000;
    this.index = 'addressbook';
    this.type = 'person';
    this.existingIndexUsed = false;
    this.inProgress = 0;
  }

  ngOnInit() {
    // Indices
    this._httpService.getESResource(HttpPaths.ALIASES).subscribe(
      aliases => this.aliases = aliases
    );
  }

  refresh() {
    this.ngOnInit();
  }

  loadTestData() {
    this.inProgress++;
    this._httpService.getResource(this.firstnamesURL).subscribe(
      names => this.firstnames = names
    );
    this._httpService.getResource(this.namesURL).subscribe(
      names => this.names = names
    );
    this._httpService.getResource(this.middlenamesURL).subscribe(
      names => this.middlenames = names
    );
    this._httpService.getResource(this.placesURL).subscribe(
      places => this.places = places
    );
    this.inProgress--;
  }

  startGenerator() {
    for (let position: number = 0; position < this.count / 500; position++) {
      setTimeout((function() {
        this.inProgress++;
        let localBulk: string = '';
        for (let position: number = 0; position < 500; position++) {
          let command: string = JSON.stringify({ index: { _index: this.index, _type: this.type } });
          let testposition = JSON.stringify({
            name: this.names[Math.round(Math.random() * this.names.length)],
            middlename: this.middlenames[Math.round(Math.random() * this.middlenames.length)],
            firstname: this.firstnames[Math.round(Math.random() * this.firstnames.length)],
            place: this.places[Math.round(Math.random() * this.places.length)]
          });
          localBulk += command + '\r\n';
          localBulk += testposition + '\r\n';
        }
        Observable.forkJoin(this._httpService.postESResource('/_bulk', localBulk)).subscribe();
        this.bulk += localBulk;
        this.inProgress--;
      }).bind(this), 50);
    }
  }

}
