import { Component } from "@angular/core";

@Component({
  selector: 'not-found',
  template: `
  Oooops nothing found!
  <br />
  Go back to <a routerLink="/">home</a>!
  `
})
export class NotFoundComponent{}
