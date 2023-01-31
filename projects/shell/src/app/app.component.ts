import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNav: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
