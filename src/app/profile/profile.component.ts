import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <h2>
      Profile works!
</h2>
  `,
  styles: [
    `
    h2{
      margin: 20px 20px 20px 20px;
      border: 1px solid black;
    }
    `
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
