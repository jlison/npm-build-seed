# npm-build-seed
A basic npm build tool seed.

Install the required development dependencies by typing:
```
npm install
```

## Commands ##
```
npm run dev
npm run compile
npm run build
npm test
npm run test:watch
npm run sass
npm run pug
npm run pack
```
### Pros of using NPM as a building tool over Gulp or Grunt ###
* Gulp and Grunt rely on NPM. NPM does not rely on Gulp or Grunt.
* NPM is here to stay. Where is Gulp 4? What happened to Grunt?
* NPM has easy to use "pre and post hooks".
* NPM scripts are easy to integrate with tools that use the command line.
* It is simple to pass arguments to an NPM script.
* You can set environment variables in your NPM scripts using its `config` directive.
* It is easy to write and use asynchronous code to run tasks with NPM scripts.
* It is easy to use pipes and stream to other tasks using NPM

### Cons of using NPM scripts ###
* The need to make the scripts "cross operating system" compatible.

Inspired by the following EggHead Tutorials:
https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool
https://egghead.io/courses/publish-javascript-packages-on-npm
