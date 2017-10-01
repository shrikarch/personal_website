import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  info = {
    "email":"",
    "phone":""
  }
  constructor() {

  }

  ngOnInit() {
    this.info = {
      "email":"shrikar.chonkar@gmail.com",
      "phone":"469-740-1920"
    }
  }

}
