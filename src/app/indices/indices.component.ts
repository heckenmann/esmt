import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { WindowRefService } from '../window-ref.service';
import { SuperComponent } from '../super.component';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent extends SuperComponent implements OnInit {

  indicesStats: Map<string, any> = new Map<string, any>();
  indicesStates: Map<string, any> = new Map<string, any>();
  settings: Map<string, any> = new Map<string, any>();
  aliases: Map<string, any> = new Map<string, any>();

  newIndex: Map<string, any>;

  constructor(private _httpService: HttpService, private _windowRefService: WindowRefService) {
    super();
  }

  ngOnInit() {
    // Settings
    this._httpService.getESResource(HttpPaths.SETTINGS).subscribe(
      settings => this.settings = settings
    );
    // Indices
    this._httpService.getESResource(HttpPaths.ALIASES).subscribe(
      aliases => this.aliases = aliases
    );
    // Stats
    this._httpService.getESResource(HttpPaths.STATS).subscribe(
      indicesStats => this.indicesStats = indicesStats.indices
    );
    // Indices States
    this._httpService.getESResource(HttpPaths.INDICES_STATES).subscribe(
      indicesStates => this.indicesStates = indicesStates.metadata.indices
    );
  }

  refresh() {
    this.ngOnInit();
  }

  showNewIndexDialog() {
    this._windowRefService.nativeWindow.AJS.dialog2('#new-index-dialog').show();
  }

  closeNewIndexDialog() {
    this._windowRefService.nativeWindow.AJS.dialog2('#new-index-dialog').hide();
  }

  createNewIndex() {
    this._windowRefService.nativeWindow.console.log(JSON.stringify(this.newIndex));
    this.closeNewIndexDialog();
  }
}
