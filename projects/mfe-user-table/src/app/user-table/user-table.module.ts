import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './user-table.component';
import { UserTableRoutingModule } from './user-table-routing.module';


@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserTableModule { }
