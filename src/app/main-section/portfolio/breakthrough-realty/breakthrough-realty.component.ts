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
  projectName = "breakthrough-realty";
  state = "normal";

  images: Image[] = [
    new Image('breakthrough_full','png','lorem'),
    new Image('breakthrough_services','png','lorem'),
    new Image('breakthrough_mobileLanding','png','lorem'),
    new Image('breakthrough_modileMain','png','lorem')
  ]

  mockImages: Image[] =[
    new Image('mockup_template2','jpg','lorem'),
    new Image('mockup_template3','jpg','lorem'),
    new Image('mockup_template1','jpg','lorem'),
   ];

  stateChange(){
    this.state == "highlighted" ? this.state = "normal" : this.state = "highlighted";
  }
  constructor(private currentRoute:ActivatedRoute) {  }

  ngOnInit() {
  }

}
