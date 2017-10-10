import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-ft1d',
  templateUrl: './ft1d.component.html',
  styleUrls: ['./ft1d.component.less']
})
export class Ft1dComponent implements OnInit {

  images: Image[] = [
    new Image('assets/images/jason360/j360_desk_landing.JPG','JPG','lorem'),
    new Image('assets/images/jason360/j360_mobile_landing.png','png','lorem'),
    new Image('assets/images/jason360/j360_mobile_faq.png','png','lorem'),
    new Image('assets/images/jason360/j360_desk_faq.JPG','JPG','lorem'),
    new Image('assets/images/jason360/j360_mobile_calib.png','png','lorem'),
    new Image('assets/images/jason360/j360_desk_calib.JPG','JPG','lorem'),
    new Image('assets/images/jason360/j360_mobile_contact.png','png','lorem')
  ]

  mockImages: Image[] =[];
  constructor() { }

  ngOnInit() {
  }

}
