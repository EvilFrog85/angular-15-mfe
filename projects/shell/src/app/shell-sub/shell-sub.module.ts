import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellSubRoutingModule } from './shell-sub-routing.module';
import { ShellSubComponent } from './shell-sub.component';
import { NewsContainerComponent } from '../components/news-container/news-container.component';


@NgModule({
  declarations: [
    ShellSubComponent
],
imports: [
    CommonModule,
    ShellSubRoutingModule,
    NewsContainerComponent
  ]
})
export class ShellSubModule { }
