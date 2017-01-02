# JIFF Angular 1.6 Boilerplate
This is Angular Boilerplate app for JIFF. 

### Conventions & Requirements
- All controller-views should be isolated such that they are treated like components and can be re-used in other applications. (Please note that I was using JSON files as api endpoints and there was no clear distiction between programs and goals otherwise ideally services should be placed inside respective page folders).
- SASS file for each view is separate, page wrapper is identified by #id to isolate page specific style definitions.
- Implement Gulp to compile sass files, combine css and js files to make it ready for production.
- Use of Flexbox CSS layout model
- Use of native JS functions like map, filter, sort, reduce, find etc
- Mobile first app - should look good on 360x640 resolution
- Use native angular methods such as ng-repeat, ng-switch, ng-if, etc.

### Folder structure
```
| css
        | app.scss
| data
        | program_blueprints.json
        | goals.json
| dist
        | app.min.js
        | app.min.css
        | lib.min.css
| js
        | app.js
        | angular.min.js
        | angular-route.min.js
        | angular-resource.min.js
| pages
└─── dashboard
       | dashboard.html
       | dashboard.scss
       | dashboard.js
└─── details
       | details.html
       | details.scss
       | details.js
services
       | programService.js
       | goalService.js
package.json
gulpfile.js
index.html
.gitignore
```

### Steps to setup: 
- Clone the repository, then navigate to the folder
- Run `npm install`
- Run `npm run build` to build the dist files to make it ready to run
- Run `npm run start` to start web server and start gulp watchers
- Web Server runs on `http://localhost:8080` 

