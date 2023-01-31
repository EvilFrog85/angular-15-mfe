import { Component } from '@angular/core';
import { StoreService } from 'store';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  user: string = this.store.user;

  constructor(
    private store: StoreService
  ) {}
}
