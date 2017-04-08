import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends SuperComponent implements OnInit {

  //root: Map<String, Object> = new Map<String, Object>();
  clusterHealth: Map<string, any> = new Map<string, any>();
  clusterStats: Map<string, any> = new Map<string, any>();
  nodesStats: Map<string, any> = new Map<string, any>();
  stats: Map<string, any> = new Map<string, any>();
  // indices: Map<string, any> = new Map<string, any>();

  constructor(private _appComponent: AppComponent, private _httpService: HttpService) {
    super();
  }

  ngOnInit() {
    // Cluster
    /*this._httpService.getResource(this._appComponent.esurl + '/_cluster/health').subscribe(
        root => this.root = root
    );*/
    this._httpService.getESResource(HttpPaths.CLUSTER_HEALTH).subscribe(
      clusterHealth => this.clusterHealth = clusterHealth
    );
    this._httpService.getESResource(HttpPaths.CLUSTER_STATS + '?filter_path=_shards,indices.count').subscribe(
      stats => this.clusterStats = stats
    );

    // Nodes
    this._httpService.getESResource(HttpPaths.NODES_STATS).subscribe(
      stats => this.nodesStats = stats
    );

    // Stats
    this._httpService.getESResource(HttpPaths.STATS).subscribe(
      stats => this.stats = stats
    );
  }

  refresh() {
    this.ngOnInit();
  }
}
