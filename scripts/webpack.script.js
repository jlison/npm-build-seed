'use strict';

import { exec, cp } from "shelljs";

let input = "./src/transpile/index.js";
let output = "./src/bundle/index.js";
let dist = "./dist/";

exec(`webpack ${input} ${output}`);
cp("-Rf", `${output}`, `${dist}`);
