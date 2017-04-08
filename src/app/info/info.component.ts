import { Component, OnInit, VERSION } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  ngVersion: string;

  constructor(
  ) {
    this.ngVersion = VERSION.full;
  }

  ngOnInit() {
  }

}
