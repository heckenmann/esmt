import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';

@Component({
  selector: 'app-index-detail',
  templateUrl: './index-detail.component.html',
  styleUrls: ['./index-detail.component.css']
})
export class IndexDetailComponent extends SuperComponent implements OnInit {

  id: String;
  settings: Map<string, any> = new Map<string, any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.id = String(this.route.snapshot.params['id']);
    this._httpService.getESResource('/' + this.id + HttpPaths.MAPPINGS).subscribe(settings => { this.settings = settings; });
  }

  refresh() {
    this.ngOnInit();
  }
}
