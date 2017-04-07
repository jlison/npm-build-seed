import { exec, cp } from "shelljs";

// Pack all files using webpack
exec("npm run pack");

// Transpile ES2016 javascript files
exec("babel src/pack/index.js --out-dir .");

// Copy transpiled app entry file
cp('-R', './src/pack/index.js', '.');

// Copy source css library files
cp('-R', './src/css/', '.');

// Transpile pug files to html
exec("pug src --out .");
