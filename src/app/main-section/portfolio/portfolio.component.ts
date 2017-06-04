import { Component, OnInit } from '@angular/core';
import { showStateTrigger } from "./animations";
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
  animations:[
    showStateTrigger
  ]
})
export class PortfolioComponent implements OnInit {

  constructor(private _router:Router) {
      if (this._router.url == '/portfolio'){
        this.isShown = true;
      } else{
        this.isShown = false;
      }
   }

  ngOnInit() {
  }
  links = [
    {
      linkname: "Circleframe Productions",
      urlStub: "circleframe",
      desc: "A portfolio website for a local yet talented photographer"
    },
    {
      linkname: "Sharpenerinc",
      urlStub: "sharpenerinc",
      desc: "A portfolio website for a couple of brilliant graphic designers"
    },
    {
      linkname: "Breakthrough Realty",
      urlStub: "breakthrough-realty",
      desc: "Website that helped a fresh realty business make their web presence"
    },
    {
      linkname: "Enliven Art Studio",
      urlStub: "enliven-art-studio",
      desc: "Concept design of a landing page for an art studio website"
    },
    {
      linkname: "Chaitanya Bhaidkar",
      urlStub: "chaitanya-b",
      desc: "Concept design of a landing page for a prodigal guitarist"
    }
  ]


  isShown = true;
  showCard = false;
  curRoute = this._router.url;

  showPortfolioCard(){
    this.showCard = true;
  }



}
