import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h2>
      Home List
    </h2>
    <ul class="items" style="list-style-type: none;">
      <li *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: [`
  h2 {
      margin: 20px 20px 20px 20px ;
      border: 1px solid black;
  }
  .badge{
    padding: 1.35em 0.65em;
  }
  .items{
    border: 20px;
  }
  `]
})
export class HomeComponent implements OnInit {

  departments = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MongoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"},
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSelect(home: { id: any;}){
    this.route.navigate(['/home',home.id]);
  }
}
