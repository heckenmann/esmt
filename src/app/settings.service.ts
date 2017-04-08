import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  esurl: string = 'http://localhost:9200';
  auiPageFocused: boolean = true;

  constructor() { }

}
