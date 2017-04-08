import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SettingsService
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private _settings: SettingsService) {
  }

  async ngOnInit() {
  }
}
