import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';

@Component({
  selector: 'app-reindex',
  templateUrl: './reindex.component.html',
  styleUrls: ['./reindex.component.css']
})
export class ReindexComponent extends SuperComponent implements OnInit {

  newReindex = {
    source: {
      index: "",
      size: 1000
    },
    dest: {
      index: "my-new-index",
      version_type: "internal"
    }
  }

  aliases: Map<string, any>;

  constructor(
    private _http: HttpService
  ) {
    super();
  }

  refresh() {
    this.ngOnInit();
  }

  ngOnInit() {
    // Indices
    this._http.getESResource(HttpPaths.ALIASES).subscribe(
      aliases => this.aliases = aliases
    );
  }

  reindex() {
    this._http.postESResource(HttpPaths.REINDEX, this.newReindex).subscribe(
      error => console.log(error)
    );
  }

}
