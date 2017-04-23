import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-sharpenerinc',
  templateUrl: './sharpenerinc.component.html',
  styleUrls: ['./sharpenerinc.component.less']
})
export class SharpenerincComponent implements OnInit {
  projectName = "sharpenerinc";
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

  mockImages: Image[] =[];
  constructor() {
  }

  ngOnInit() {
  }



}
