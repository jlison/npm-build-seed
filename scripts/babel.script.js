'use strict';

import { exec } from "shelljs";

let input = "./src/";
let output = "./src/transpile/";
let ignore = "./src/bundle/,./src/transpile/";

exec(`babel ${input} --out-dir ${output} --ignore ${ignore}`);
