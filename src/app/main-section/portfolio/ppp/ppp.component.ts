import { Component, OnInit } from '@angular/core';
import { Image } from '../images.model';

@Component({
  selector: 'app-ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.less']
})
export class PppComponent implements OnInit {


  images: Image[] = [
    new Image('assets/images/ppp/j360_mobile_footer.png','png','lorem'),
    new Image('assets/images/ppp/ppp_desk_footer.png','png','lorem'),
    new Image('assets/images/ppp/ppp_desk_landing.png','png','lorem'),
    new Image('assets/images/ppp/ppp_mobile_bio.png','png','lorem'),
    new Image('assets/images/ppp/ppp_mobile_bioEx.png','png','lorem'),
    new Image('assets/images/ppp/ppp_mobile_landing.png','png','lorem'),
    new Image('assets/images/ppp/ppp_FullSite.jpg','jpg','lorem')
  ]

  mockImages: Image[] =[];

  constructor() { }

  ngOnInit() {
  }

}
