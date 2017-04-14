[![Build Status](https://travis-ci.org/heckenmann/esmt.svg?branch=master)](https://travis-ci.org/heckenmann/esmt)

***!!! Under development !!!***

# ESMT (elasticsearch management tool)

ESMT is a GUI to manage your elasticsearch cluster and was created as free time project.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Features

Documentation:
https://www.elastic.co/guide/en/elasticsearch/reference/current/

Used: &#10004;
Not yet used: &#10008;

elasticsearch API | Category | ESMT
--- | --- | ---
Search | Search APIs | &#10004;
Cluster Health | Cluster APIs | &#10004;
Cluster State | Cluster APIs | &#10004;
Cluster Stats | Cluster APIs | &#10004;
Pending cluster tasks | Cluster APIs | &#10004;
Cluster Reroute | Cluster APIs | &#10008;
Cluster Update Settings | Cluster APIs | &#10008;
Nodes Stats | Cluster APIs | &#10004;
Nodes Info | Cluster APIs | &#10004;
Task Management API | Cluster APIs | &#10008;
Nodes hot_threads | Cluster APIs | &#10008;
Cluster Allocation Explain API | Cluster APIs | &#10008;
snapshot and restore module | Modules | &#10004;

## Screenshot
TODO

## Run the application
TODO

### Configure elasticsearch
TODO

## Development

You are welcome to commit your stuff.

### Used products
- angular 2 (with angular-cli)
- Atlassian AUI
- elasticsearch 5

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
