import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mock-images',
  template: `
  <div class="mockups" [hidden]=getMockCount()>
    <p class="subHead">Mockups and/or Concepts:</p>
    <div class="row">
      <div class="col-md-4" *ngFor="let image of mockImages">
        <div class="card">
          <img [lazyLoad]="image.imageName" alt="" class="img-fluid img-thumbnail">
          <div class="card-block text-center card-title p-1 hidden">
            <p>{{image.caption}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="screens" [hidden]=getScreensCount()>
    <p  class="subHead">ScreenShots:</p>
    <div class="card-columns">
      <div class="card text-center" *ngFor="let image of images">
        <img [lazyLoad]="image.imageName" [defaultImage]="defaultImage" alt="" class="img-fluid">
        <div class="card-block text-center card-title p-1 hidden">
          <p>{{image.caption}}</p>
        </div>
      </div>

    </div>

  </div>
  `,
  styles: [``]
})
export class MockImagesComponent implements OnInit {

  defaultImage = "assets/images/preloader.gif";

  @Input() images;
  @Input() mockImages;
  getMockCount(){ return this.mockImages.length === 0; }
  getScreensCount(){ return this.images.length === 0; }

  constructor() { }

  ngOnInit() {
  }

}
