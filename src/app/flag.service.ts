import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class FlagService {

  constructor(
    private _window: WindowRefService
  ) { }

  showFlag(title: string, body: string, type?: string) {
    if (type == null) {
      type = 'info';
    }

    this._window.nativeWindow.AJS.flag({
      type: type,
      title: title,
      body: body
    });
  }
}
