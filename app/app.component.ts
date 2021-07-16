import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- {{ title }} -->
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <!-- <passenger-viewer></passenger-viewer> -->
      <a routerLink="/">Home</a>
      <a routerLink="/oops">404</a>
      <br>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
title: string;
constructor(){
  this.title = 'Ultimate Course'
}
}
