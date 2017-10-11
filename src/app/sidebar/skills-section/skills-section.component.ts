import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.less']
})
export class SkillsSectionComponent implements OnInit {
skills = [
  {"name":"HTML & CSS", "value":95},
  {"name":"JavaScript", "value":90},
  {"name":"NodeJs", "value":85},
  {"name":"Elixir", "value":75},
  {"name":"REST APIs / ExpressJS", "value":85},
  {"name":"AngularJs", "value":80},
  {"name":"Angular2", "value":68},
  {"name":"PHP", "value":60},
  {"name":"ReactJs", "value":20},
]

  constructor() { }

  ngOnInit() {
  }

}
