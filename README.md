# Micro frontend demo
Try it out by running `npm install` and `npm run run:all`.
I've tried to add examples of some of the most common features of a Angular project.

1. Shell uses internal components och lazy-loaded modules.
2. Shell uses mfe lazy-loaded modules.
3. Shell use a mfe lazy-loaded component.
4. Shell and one mfe use a shared lib --> store, to set and get values. The same principle is applicable to a auth-lib.
5. One mfe module fetches data from external API.


## Steps to reproduce this repo
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
`npm run run:all`
et.c.

## Need to knows
When creating a new mfe and exporting a module, exposed module can not be app.module. Atleast not without additional configuration.

## TODOs
Add example using shared and isolated CSS. encapsulation: ViewEncapsulation.___