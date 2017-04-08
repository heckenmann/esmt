import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  esurl: string;
  auiPageFocused: boolean;

  constructor(
    private _settings: SettingsService
  ) { }

  ngOnInit() {
    this.esurl = this._settings.esurl;
    this.auiPageFocused = this._settings.auiPageFocused;
  }

  save() {
    this._settings.esurl = this.esurl;
    this._settings.auiPageFocused = this.auiPageFocused;
  }

}
