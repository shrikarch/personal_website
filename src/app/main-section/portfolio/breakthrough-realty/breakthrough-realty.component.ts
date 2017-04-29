import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeInAnimation } from '../../../animations/routes_animation'
import { Image } from '../images.model';

@Component({
  selector: 'app-breakthrough-realty',
  templateUrl: './breakthrough-realty.component.html',
  styleUrls: ['./breakthrough-realty.component.less'],
  // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class BreakthroughRealtyComponent implements OnInit {
  // state = "normal";
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
  // stateChange(){
  //   this.state == "highlighted" ? this.state = "normal" : this.state = "highlighted";
  // }
  constructor() { }

  ngOnInit() {
  }

}
