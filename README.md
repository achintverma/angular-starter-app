# Angular 1.6 Starter App
This is Angular Boilerplate app setup with SASS and Gulp. Folder structure based on best practices from Angular team. 

### Conventions
- Each component should be made as reusable component, with its style, markup and services together
- Folders should be organized based on the component, not based on the type of files 
- Use SASS processor to combine & minify CSS & JS


### Folder structure
```
| css
        | app.scss
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
services
       | default.js
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


![Screenshot](/screenshot.png?raw=true "Dashboard")
