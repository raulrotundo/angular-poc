## Angular POC

This POC (Proof of concept) is intended to be use as base or demo for big projects with Angular.

### What's included?
* [NPM](https://www.npmjs.com/) for package manager.
* [TypeScript](http://www.typescriptlang.org/) for the base language.

* [Angular CLI](https://github.com/angular/angular-cli) for Angular applications based on the ember-cli project.
* [Bootstrap](https://ng-bootstrap.github.io/#/home) Bootstrap 4 components, powered by Angular.
* [Karma](http://karma-runner.github.io/) for test-runner.
* [Jasmine](http://jasmine.github.io/) for test framework.
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage.


### Prerequisites
* You need to have [NodeJS](https://nodejs.org/en/download/) and :
```bash
npm install -g @angular/cli http-server
```

### Installation
Clone the repo: 
```bash
git clone git@github.com:raulrotundo/angular-poc.git
```

Installing dependencies: 
```bash
npm install
```

### Start
Let's start up, run:
```bash
npm start
```

Finally go to:
```bash
http://localhost:4200
```

Code Coverage Report:
```bash
http-server -c-1 -o -p 9875 ./coverage
```