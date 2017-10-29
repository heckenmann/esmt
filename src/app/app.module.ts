import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { HttpCacheModule } from 'ng-http-cache';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapValuesPipe } from './map-values.pipe';
import { ContainsPipe } from './contains.pipe';
import { NodesComponent } from './nodes/nodes.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
import { SearchComponent } from './search/search.component';
import { CheckStatePipe } from './check-state.pipe';
import { IsMapPipe } from './is-map.pipe';
import { IndicesComponent } from './indices/indices.component';
import { IndexDetailComponent } from './index-detail/index-detail.component';
import { FilesizePipe } from './filesize.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { SnapshotsComponent } from './snapshots/snapshots.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings.service';
import { InfoComponent } from './info/info.component';
import { GeneratorComponent } from './generator/generator.component';
import { HttpService } from './http.service';
import { WindowRefService } from './window-ref.service';
import { FlagService } from './flag.service';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapValuesPipe,
    ContainsPipe,
    NodesComponent,
    NodesDetailComponent,
    SearchComponent,
    CheckStatePipe,
    IsMapPipe,
    IndicesComponent,
    IndexDetailComponent,
    FilesizePipe,
    TasksComponent,
    SnapshotsComponent,
    SettingsComponent,
    InfoComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //HttpCacheModule,
    JsonpModule,
    OrderModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'nodes',
        component: NodesComponent
      },
      {
        path: 'nodes/:id',
        component: NodesDetailComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'indices',
        component: IndicesComponent
      },
      {
        path: 'indices/:id',
        component: IndexDetailComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'snapshots',
        component: SnapshotsComponent
      },
      {
        path: 'generator',
        component: GeneratorComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'info',
        component: InfoComponent
      }
    ])
  ],
  providers: [
    { provide: 'AJS', useValue: 'AJS' },
    SettingsService,
    HttpService,
    WindowRefService,
    FlagService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
