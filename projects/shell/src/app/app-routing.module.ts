import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';

import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'sub',
        loadChildren: () =>
            import('./shell-sub/shell-sub.module').then(m => m.ShellSubModule)
    },
    {
        path: 'user-table',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfeUserTable',
                exposedModule: './Module'
            }).then(m => m.UserTableModule)
    },
    {
        path: 'news',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfeNews',
                exposedModule: './Module'
            }).then(m => m.NewsModule)
    },
    {
        path: 'signup',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mfeSignup',
                exposedModule: './Module'
            }).then(m => m.SignupModule)
    },
    {
        path: '**',
        component: Page404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
