import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enliven-art',
  templateUrl: './enliven-art.component.html',
  styleUrls: ['./enliven-art.component.less']
})
export class EnlivenArtComponent implements OnInit {

@Input() isShown;

  constructor() { }

  ngOnInit() {
  }

}
