import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
//import { MasonryModule } from 'angular2-masonry';
//import { LightboxModule } from 'angular2-lightbox/src';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { InfoParaComponent } from './sidebar/info-para/info-para.component';
import { SkillsSectionComponent } from './sidebar/skills-section/skills-section.component';
import { PortfolioComponent } from './main-section/portfolio/portfolio.component';
import { ResumeComponent } from './main-section/resume/resume.component';
import { ProjectsComponent } from './main-section/resume/projects/projects.component';
import { ExperienceComponent } from './main-section/resume/experience/experience.component';
import { CircleframeComponent } from './main-section/portfolio/circleframe/circleframe.component';
import { SharpenerincComponent } from './main-section/portfolio/sharpenerinc/sharpenerinc.component';
import { SectionSwitcherComponent } from './section-switcher/section-switcher.component';
import { BreakthroughRealtyComponent } from './main-section/portfolio/breakthrough-realty/breakthrough-realty.component';
import { MockImagesComponent } from './main-section/portfolio/mock-images.component';
import { SidebarToDoComponent } from './sidebar/sidebar-to-do.component';

const appRoutes: Routes = [
  { path: '', component: ResumeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent, children: [
    { path: 'circleframe', component: CircleframeComponent },
    { path: 'sharpenerinc', component: SharpenerincComponent },
    { path: 'breakthrough-realty', component: BreakthroughRealtyComponent }
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainSectionComponent,
    InfoParaComponent,
    SkillsSectionComponent,
    PortfolioComponent,
    ResumeComponent,
    ProjectsComponent,
    ExperienceComponent,
    CircleframeComponent,
    SharpenerincComponent,
    SectionSwitcherComponent,
    BreakthroughRealtyComponent,
    MockImagesComponent,
    SidebarToDoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Angular2FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
