[![Build Status](https://travis-ci.org/heckenmann/esmt.svg?branch=master)](https://travis-ci.org/heckenmann/esmt)

Project is still under development! Feel free to push your code! :)


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
```
docker run -d --restart always --name esmt -p 8080:80 heckenmann/esmt
```

### Configure elasticsearch
See testingEnv/docker-compose.yml and https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-http.html for details.

## Development

You are welcome to commit your stuff.

### Used products
- angular 2 (with angular-cli)
- Atlassian AUI
- elasticsearch 5

### Bootstrapping Environment
To start 3 elasticsearch nodes and a container for developing/testing, you have to install docker and docker-compose. After that you can execute the command:
```
# You have to cd to the project-root-directory, then
docker-compose -f testingEnv/docker-compose.yml up -d

# Install dependencies
docker exec -it test npm install
docker exec -it test npm install --only=dev

# Install test-data
docker exec -it test bash testingEnv/data2es.sh
```
The project folder will be mounted into the container. So you can edit the files with an editor of your choice on the host-system.

### Development server
Run
```
docker exec -it test ng serve --host 0.0.0.0
```
for a dev server. Navigate to `http://<container-ip>:4200/`. The app will automatically reload if you change any of the source files. You have to set the one elasticsearch-node-IP under settings.

### Code scaffolding

Run
```
docker exec -it test ng generate component component-name
```
to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run
```
docker exec -it test ng build
```
to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests (Not implemented)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run
```
docker exec -it test ng e2e
```
to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
