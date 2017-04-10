'use strict';

import { exec, cp } from "shelljs";

let input = "./src/_transpile/index.js";
let output = "./src/_bundle/index.js";
let dist = "./dist/";

exec(`webpack ${input} ${output}`);
cp("-Rf", `${output}`, `${dist}`);
