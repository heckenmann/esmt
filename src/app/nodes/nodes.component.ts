import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';

@Component({
    selector: 'app-nodes',
    templateUrl: './nodes.component.html',
    styleUrls: ['./nodes.component.css']
})
export class NodesComponent extends SuperComponent implements OnInit {

    nodesStats: Map<string, any> = new Map<string, any>();

    constructor(private _httpService: HttpService) {
        super();
    }

    ngOnInit() {
        this._httpService.getESResource(HttpPaths.NODES_STATS).subscribe(
            stats => this.nodesStats = stats
        );
    }

    refresh() {
        this.ngOnInit();
    }

}
