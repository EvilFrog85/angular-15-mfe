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
`npm run run:all`
et.c.

## Need to knows
When creating a new mfe and exporting a module, exposed module can not be app.module. Atleast not without additional configuration.