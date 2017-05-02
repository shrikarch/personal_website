import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.less']
})
export class TestComponentComponent implements OnInit {

  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = 'https://www.placecage.com/1000/1000';

  images = [
    'https://images.unsplash.com/photo-1468413922365-e3766a17da9e?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80',
    'https://images.unsplash.com/photo-1488388373205-a134c1cc7e4e?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80',
    'https://images.unsplash.com/photo-1422257986712-4f02edc298ce?dpr=2&auto=compress,format&fit=crop&w=1199&h=1199&q=80'
  ];

  constructor() { }

  ngOnInit() {
  }

}
