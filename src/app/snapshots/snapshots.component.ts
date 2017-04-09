import { Component, OnInit } from '@angular/core';
import { HttpService, HttpPaths } from '../http.service';
import { WindowRefService } from '../window-ref.service';
import { FlagService } from '../flag.service';
import { SuperComponent } from '../super.component';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent extends SuperComponent implements OnInit {

  repositories: Map<string, any>;
  snapshots: Array<any>;
  newrepo = {
    name: null,
    verify: true,
    data: {
      type: 'fs',
      settings: {
        location: null,
        compress: true,
        readonly: false,
        chunk_size: null,
        max_restore_bytes_per_sec: null,
        max_snapshot_bytes_per_sec: null
      }
    }
  };

  aliases: Map<string, any>;

  newsnapshot = {
    repository: null,
    indices: null,
    name,
    data: {
      indices: null,
      ignore_unavailable: true,
      include_global_state: false
    }
  }

  constructor(
    private _http: HttpService,
    private _window: WindowRefService,
    private _flags: FlagService
  ) {
    super();
  }

  ngOnInit() {
    // Snapshots
    this._http.getESResource(HttpPaths.ALL_REPOSITORIES).subscribe(
      repositories => {
        this.repositories = repositories;
        this.snapshots = new Array<any>();
        for (let repo in repositories) {
          this._http.getESResource(HttpPaths.REPOSITORIES + '/' + repo + '/_all').subscribe(
            snapshots => {
              let ssValues = snapshots['snapshots'];
              for (let position in ssValues) {
                this.snapshots.push({
                  repository: repo,
                  data: ssValues[position]
                });
              }
              //console.log(JSON.stringify(snapshots));
            }
          );
        }
      }
    );

    // Indices
    this._http.getESResource(HttpPaths.ALIASES).subscribe(
      aliases => this.aliases = aliases
    );
  }

  refresh() {
    this.ngOnInit();
  }

  createRepository() {
    this._http.putESResource(
      HttpPaths.REPOSITORIES + '/' + this.newrepo.name + '?verify=' + this.newrepo.verify,
      this.newrepo.data).subscribe(
      (data) => {
        this.ngOnInit();
        this.closeNewRepositoryDialog();
        this._flags.showFlag('Repository Info', 'Repo successfully created: ' + this.newrepo.name, 'success');
      },
      (error) => {
        console.log(error);
        this._flags.showFlag('Repository Info', error, 'error');
      }
      );
  }

  deleteRepo(id: string) {
    if (confirm('Delete repository ' + id + '?')) {
      this._http.deleteESResource(
        HttpPaths.REPOSITORIES + '/' + id,
        this.newrepo.data).subscribe(
        (data) => {
          this.ngOnInit();
          this._flags.showFlag('Repository Info', 'Repository successfully deleted: ' + id, 'success');
        },
        (error) => {
          console.log(error);
          this._flags.showFlag('Repository Error', 'Repository not deleted: ' + id, 'error');
        }
        );
    }
  }

  createSnapshot() {
    this.newsnapshot.data.indices = this.newsnapshot.indices.join();
    this._http.putESResource(
      HttpPaths.REPOSITORIES + '/' + this.newsnapshot.repository + '/' + this.newsnapshot.name,
      this.newsnapshot.data).subscribe(
      (response) => {
        if (response.accepted) {
          this._flags.showFlag('Snapshot Info', 'Snapshot successfully started: ' + this.newsnapshot.name, 'success');
          this.closeNewSnapshotDialog();
          this.ngOnInit();
        } else {
          this._flags.showFlag('Snapshot Error', 'Snapshot not started: ' + this.newsnapshot.name, 'success');
        }
      },
      (error) => {
        console.log(error);
        this._flags.showFlag('Snapshot Error', 'Snapshot not started: ' + this.newsnapshot.name + '</br>' + JSON.parse(error._body).error.root_cause[0].reason, 'error');
      }
      );
  }

  deleteSnapshot(repository: string, snapshot: string) {
    if (confirm('Delete snapshot ' + repository + '/' + snapshot + '?')) {
      this._http.deleteESResource(HttpPaths.REPOSITORIES + '/' + repository + '/' + snapshot, null).subscribe(
        (response) => {
          this._flags.showFlag('Snapshot Info', 'Snapshot successfully deleted: ' + repository + '/' + snapshot, 'success');
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  restoreSnapshot(repository: string, snapshot: string) {
    
  }

  showNewRepositoryDialog() {
    this._window.nativeWindow.AJS.dialog2('#new-repository-dialog').show();
  }

  closeNewRepositoryDialog() {
    this._window.nativeWindow.AJS.dialog2('#new-repository-dialog').hide();
  }

  showNewSnapshotDialog() {
    this._window.nativeWindow.AJS.dialog2('#new-snapshot-dialog').show();
  }

  closeNewSnapshotDialog() {
    this._window.nativeWindow.AJS.dialog2('#new-snapshot-dialog').hide();
  }
}
