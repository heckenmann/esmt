import { Injectable } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';

export class HttpPaths {
  static CLUSTER_HEALTH = '/_cluster/health';
  static CLUSTER_STATS = '/_cluster/stats';
  static NODES_STATS = '/_nodes/stats';
  static ALIASES = '/_aliases';
  static SETTINGS = '/_settings';
  static STATS = '/_stats';
  static MAPPINGS = '/_mapping';
  static SEARCH = '/_all/_search';
  static TASKS = '/_cluster/pending_tasks';
  static REPOSITORIES = '/_snapshot';
  static ALL_REPOSITORIES = HttpPaths.REPOSITORIES + '/_all';
  // Index open / closed?
  static INDICES_STATES = '/_cluster/state?filter_path=metadata.indices.*.state';
  static REINDEX = '/_reindex';
}

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
    private _jsonp: Jsonp,
    private _settings: SettingsService) {
  }

  /*
  * GENERAL
  */
  getResource(_resource: string) {
    return this._http.get(encodeURI(_resource))
      .map(res => res.json(),
      error => alert(error));
  }

  postResource(_resource: string, _data: any) {
    return this._http.post(encodeURI(_resource), _data)
      .map(res => res.json(),
      error => alert(error));
  }

  putResource(_resource: string, _data: any) {
    return this._http.put(encodeURI(_resource), _data)
      .map(res => res.json(),
      error => alert(error));
  }

  deleteResource(_resource: string, _data: any) {
    return this._http.delete(encodeURI(_resource), _data)
      .map(res => res.json(),
      error => alert(error));
  }

  /*
  * ELASTICSEARCH
  */
  getESResource(_path: string) {
    return this.getResource(this._settings.esurl + _path);
  }

  postESResource(_path: string, _data: any) {
    return this.postResource(this._settings.esurl + _path, _data);
  }

  putESResource(_path: string, _data: any) {
    return this.putResource(this._settings.esurl + _path, _data);
  }

  deleteESResource(_path: string, _data: any) {
    return this.deleteResource(this._settings.esurl + _path, _data);
  }
}
