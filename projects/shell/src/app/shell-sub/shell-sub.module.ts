import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellSubRoutingModule } from './shell-sub-routing.module';
import { ShellSubComponent } from './shell-sub.component';


@NgModule({
  declarations: [
    ShellSubComponent
  ],
  imports: [
    CommonModule,
    ShellSubRoutingModule
  ]
})
export class ShellSubModule { }
