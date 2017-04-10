import { exec } from "shelljs";
import { parallel } from "async";

parallel({
    babel: (callback) => {
      exec("npm run babel");
      callback(null, 'babel');
    },
    sass: (callback) => {
      exec("npm run sass");
      callback(null, 'sass');
    },
    pug: (callback) =>{
      exec("npm run pug");
      callback(null, 'pug');
    },
    imgs: (callback) =>{
      exec("npm run imgs", {async:true});
      callback(null, 'imgs');
    },
    fonts: (callback) =>{
      exec("npm run fonts", {async:true});
      callback(null, 'fonts');
    }
}, (err, results) => {

  if(err){
    console.error("Build error: %j", err);
  }

  exec("npm run webpack");
  exec("npm run test");
});
