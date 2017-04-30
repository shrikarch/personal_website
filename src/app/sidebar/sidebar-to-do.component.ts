import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-to-do',
  template: `
  <div class="card main-card">
    <div class="card-block">
    <p>Planned To-Do for this website</p>
    <ul class="">
      <li>Add lazyload on images</li>
      <li>Fade In animations</li>
      <li>Route animations and fade in effects</li>
    </ul>

    </div>
  </div>
  `,
  styles: [`
    .card{
      margin-top:10px;
    }
    ul li{font-size:14px;}
    `]
})
export class SidebarToDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
