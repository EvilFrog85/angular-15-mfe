import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellSubComponent } from './shell-sub.component';

const routes: Routes = [{ path: '', component: ShellSubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellSubRoutingModule { }
