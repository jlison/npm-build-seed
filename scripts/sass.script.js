'use strict';

import { exec, cp } from "shelljs";

let input = "./src/scss/style.scss";
let output = "./src/css/";
let dist = "./dist/";

exec(`node-sass ${input} --output ${output}`);
cp("-Rf", `${output}`, `${dist}`);
