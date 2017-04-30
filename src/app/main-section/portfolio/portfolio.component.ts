import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
  links = [
    {linkname: "Circleframe Productions", urlStub: "circleframe"},
    {linkname: "Sharpenerinc", urlStub: "sharpenerinc"},
    {linkname: "Breakthrough Realty", urlStub: "breakthrough-realty"}
    // {linkname: "Enliven Art Studio", urlStub: ""},
    // {linkname: "Enliven Art Studio", urlStub: ""}
  ]

  showCard = false;

  showPortfolioCard(){
    this.showCard = true;
  }



}
