import { Inject, Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { SuperComponent } from '../super.component';
import { WindowRefService } from '../window-ref.service';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends SuperComponent implements OnInit {

  searchInput;
  searchResult;
  searchSize = 10;

  constructor(
    private _httpService: HttpService,
    private _windowRefService: WindowRefService,
    private _flagService: FlagService
  ) {
    super();
  }

  ngOnInit() {
  }

  refresh() {
  }

  search() {
    this._httpService.getESResource(HttpPaths.SEARCH + '?q=' + this.searchInput + '&size=' + this.searchSize).subscribe(
      searchResult => {
        this.searchResult = searchResult;
        /*this._flagService.showFlag('Search Stats',
          '<p>Shards total: ' + searchResult._shards.total + '</p>'
            + '<p>Shards successful: ' + searchResult._shards.successful + '</p>'
              + '<p>Shards failed: ' + searchResult._shards.failed + '</p>'
                + '<p>Timed out: ' + searchResult.timed_out + '</p>'
                  + '<p>Total hits: ' + searchResult.hits.total + '</p>'
                    + '<p>Max score: ' + searchResult.hits.max_score + '</p>')*/
      }
    );
  }

  showJson(_id) {
    this._windowRefService.nativeWindow.AJS.dialog2(' #dialog-json-' + _id).show();
  }
}
