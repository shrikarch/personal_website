import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-switcher',
  templateUrl: './section-switcher.component.html',
  styles: [`
    @media (max-width: 992px) {
      .row{margin-top:20px;}
    }
  `]
})
export class SectionSwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
