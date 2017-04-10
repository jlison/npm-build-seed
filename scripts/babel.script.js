'use strict';

import { exec } from "shelljs";

let input = "./src/";
let output = "./src/_transpile/";
let ignore = "./src/_bundle/,./src/_transpile/";

exec(`babel ${input} --out-dir ${output} --ignore ${ignore}`);
