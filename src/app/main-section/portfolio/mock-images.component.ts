import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mock-images',
  template: `
  <div class="mockups" [hidden]=getMockCount()>
    <p class="subHead">Mockups and/or Concepts:</p>
    <div class="row">
      <div class="col-md-4" *ngFor="let image of mockImages">
        <div class="card">
          <img src="assets/images/{{projectName}}/{{image.imageName}}.{{image.ext}}" alt="" class="img-fluid img-thumbnail">
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
      <div class="card" *ngFor="let image of images">
        <img src="assets/images/{{projectName}}/{{image.imageName}}.{{image.ext}}" alt="" class="img-fluid img-thumbnail">
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

  @Input() images;
  @Input() mockImages;
  @Input() projectName;
  getMockCount(){ return this.mockImages.length === 0; }
  getScreensCount(){ return this.images.length === 0; }

  constructor() { }

  ngOnInit() {
  }

}
