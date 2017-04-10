# npm-build-seed
A basic npm build tool seed.

Clone the repo using Git:
```
git clone git@github.com:jlison/npm-build-seed.git
```
... or install it with NPM:
```
npm install npm-build-seed
```
## Basic usage ##
1. Install devDependencies if you haven't already: `npm install`
2. Place files in their respective folders under: `./src`.
3. Run desired command(s).
4. Get the output in the `./dist` folder.
5. Cash in, sell out, bro down.

## Command list ##
* `npm run babel` - Runs babel transpiler.
* `npm run build` - Runs all commands in the right order with async parallel.
* `npm run dev` -  Runs `npm run build` on watch.
* `npm run fonts` - Copies fonts to `./dist` folder. Not very exciting.
* `npm run imgs` - Optimizes jpg and png images.
* `npm run sass` - Runs sass and transpiles scss code to css.
* `npm run pug` - Transpiles pug (a.k.a jade) files to html.
* `npm run test` - Runs all the unit tests with jest once.
* `npm run test:watch` - Runs `npm run test` on watch.
* `npm run webpack` - Packs all the javascript files into a single file.

### Pros of using NPM as a build tool over Gulp or Grunt ###
* Gulp and Grunt rely on NPM. NPM does not rely on Gulp or Grunt.
* NPM is here to stay. Where is Gulp 4? What happened to Grunt?
* NPM has easy to use "pre and post hooks".
* NPM scripts are easy to integrate with tools that use the command line.
* It is simple to pass arguments to an NPM script.
* You can set environment variables in your NPM scripts using its `config` directive.
* It is easy to write and use asynchronous code to run tasks with NPM scripts.
* It is easy to use pipes and stream to other tasks using NPM

### Cons of using NPM scripts as a build tool ###
* The need to make the scripts "cross operating system" compatible.

Inspired by the following EggHead Tutorials: <br>
https://egghead.io/courses/how-to-use-npm-scripts-as-your-build-tool <br>
https://egghead.io/courses/publish-javascript-packages-on-npm
