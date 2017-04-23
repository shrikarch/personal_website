import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-circleframe',
  templateUrl: './circleframe.component.html',
  styleUrls: ['./circleframe.component.less']
})
export class CircleframeComponent implements OnInit {
  projectName = "circleframe";
  images: Image[] = [
    new Image('cfpgallery','png','lorem'),
    new Image('cfphome','png','lorem'),
    new Image('cfpmobilehome','png','lorem'),
    new Image('cfpmobilesplash','png','lorem'),
    new Image('cfpSplash','png','lorem')
  ]

  mockImages: Image[] =[
    new Image('cfpmock1','jpg','lorem'),
    new Image('cfpmock2','jpg','lorem'),
    new Image('cfpmock3','jpg','lorem')
   ];
  constructor() { }

  ngOnInit() {
  }

}
