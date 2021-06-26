import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- {{ title }} -->
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
title: string;
constructor(){
  this.title = 'Ultimate Course'
}
}
