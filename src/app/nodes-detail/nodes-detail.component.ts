import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent extends SuperComponent implements OnInit {

  id: string;
  nodeStats: Map<string, any> = new Map<string, any>();
  nodeInfo: Map<string, any> = new Map<string, any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService
  ) {
    super();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this._httpService.getESResource('/_nodes/' + this.id + '/stats').subscribe(nodeDetails => { this.nodeStats = nodeDetails.nodes[this.id]; });
    this._httpService.getESResource('/_nodes/' + this.id).subscribe(nodeInfo => { this.nodeInfo = nodeInfo.nodes[this.id]; });
  }

  refresh() {
    this.ngOnInit();
  }
}
