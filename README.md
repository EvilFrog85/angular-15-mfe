# Steps to reproduce
1. `ng new angular-microfrontend --create-application=false --interactive=false`
2. `ng g application shell --style scss --routing true`
3. `ng g application mfe-news --style scss --routing false`
4. `npm install --save-dev @angular-architects/module-federation`
5. `ng add @angular-architects/module-federation --project shell --type host --port 4200`
6. `ng add @angular-architects/module-federation --project mfe-news --type remote --port 4201`
7. Use module federation to load modules/components: https://www.angulararchitects.io/aktuelles/module-federation-with-angulars-standalone-components/


To add a service
`ng generate service hello-world --project mfe-news`

To add a package
`ng add @angular/material --project mfe-news`

To add a module
`ng g module shell-subpage --project shell`
`ng g component shell-subpage --project shell`


Serve projects
`ng serve shell`
`ng serve mfe-news`
et.c.


# AngularMicrofrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
