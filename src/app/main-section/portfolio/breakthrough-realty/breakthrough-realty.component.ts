import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-breakthrough-realty',
  templateUrl: './breakthrough-realty.component.html',
  styleUrls: ['./breakthrough-realty.component.less']
})
export class BreakthroughRealtyComponent implements OnInit {
images: Image[] = [
  new Image('sharpener_home','png','lorem'),
  new Image('sharpenerMain','gif','lorem'),
  new Image('sharpener_product','png','lorem'),
  new Image('sharpener_work','png','lorem'),
  new Image('sharpener_about','png','lorem'),
  new Image('sharpener_awards','png','lorem'),
  new Image('sharpener_mobile_product','png','lorem'),
  new Image('sharpener_mobile_work','png','lorem')
]
  constructor() { }

  ngOnInit() {
  }

}
