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
    new Image('assets/images/sharpenerinc/sharpener_home.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpenerMain.gif','gif','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_product.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_work.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_about.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_awards.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_mobile_product.png','png','lorem'),
    new Image('assets/images/sharpenerinc/sharpener_mobile_work.png','png','lorem')
  ]

  mockImages: Image[] =[];
  constructor() {
  }

  ngOnInit() {
  }



}
