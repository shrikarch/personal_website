import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-circleframe',
  templateUrl: './circleframe.component.html',
  styleUrls: ['./circleframe.component.less']
})
export class CircleframeComponent implements OnInit {

  images: Image[] = [
    new Image('assets/images/circleframe/cfpgallery.png','png','lorem'),
    new Image('assets/images/circleframe/cfphome.png','png','lorem'),
    new Image('assets/images/circleframe/cfpmobilehome.png','png','lorem'),
    new Image('assets/images/circleframe/cfpmobilesplash.png','png','lorem'),
    new Image('assets/images/circleframe/cfpSplash.png','png','lorem')
  ]

  mockImages: Image[] =[
    new Image('assets/images/circleframe/cfpmock1.jpg','jpg','lorem'),
    new Image('assets/images/circleframe/cfpmock2.jpg','jpg','lorem'),
    new Image('assets/images/circleframe/cfpmock3.jpg','jpg','lorem')
   ];
  constructor() { }

  ngOnInit() {
  }

}
