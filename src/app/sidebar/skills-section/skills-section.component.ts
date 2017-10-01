import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.less']
})
export class SkillsSectionComponent implements OnInit {
skills = [
  {"name":"HTML & CSS", "value":95},
  {"name":"JavaScript", "value":85},
  {"name":"Elixir", "value":75},
  {"name":"Angular2", "value":75},
  {"name":"AngularJs", "value":80},
  {"name":"NodeJs", "value":55},
  {"name":"PHP", "value":60},
  {"name":"ReactJs", "value":20},
]

  constructor() { }

  ngOnInit() {
  }

}
