import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNav: boolean = true;

  constructor(
    private store: StoreService
  ) { 
    this.store.login('Jonas', '');
  }

  ngOnInit(): void {
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
