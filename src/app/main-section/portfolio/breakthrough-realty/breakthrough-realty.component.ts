import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import { fadeInAnimation } from '../../../animations/routes_animation'
import { Image } from '../images.model';

@Component({
  selector: 'app-breakthrough-realty',
  templateUrl: './breakthrough-realty.component.html',
  styleUrls: ['./breakthrough-realty.component.less'],
  animations: [
    trigger('divState', [
      state("normal", style({
        'opacity':'0',
        'transform':'translateY(10px)'
      })),
      state("highlighted", style({
        'opacity' : '1',
        'transform':'translateY(0px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ])
  ]
})
export class BreakthroughRealtyComponent implements OnInit {
  state = "normal";

  images: Image[] = [
    new Image('assets/images/breakthrough-realty/breakthrough_full.png','png','lorem'),
    new Image('assets/images/breakthrough-realty/breakthrough_services.png','png','lorem'),
    new Image('assets/images/breakthrough-realty/breakthrough_mobileLanding.png','png','lorem'),
    new Image('assets/images/breakthrough-realty/breakthrough_modileMain.png','png','lorem')
  ]

  mockImages: Image[] =[
    new Image('assets/images/breakthrough-realty/mockup_template2.jpg','jpg','lorem'),
    new Image('assets/images/breakthrough-realty/mockup_template3.jpg','jpg','lorem'),
    new Image('assets/images/breakthrough-realty/mockup_template1.jpg','jpg','lorem'),
   ];

  stateChange(){
    this.state == "highlighted" ? this.state = "normal" : this.state = "highlighted";
  }
  constructor(private currentRoute:ActivatedRoute) {  }

  ngOnInit() {
  }

}
