import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class SettingsService {

  esurl: string;
  auiPageFocused: boolean = true;

  constructor(
    private _window: WindowRefService
  ) {
    this.esurl = 'http://' + this._window.nativeWindow.location.hostname + ':9200';
  }

}
