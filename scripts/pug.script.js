'use strict';

import { exec } from "shelljs";

let input = "./src/html/";
let output = "./dist/";

exec(`pug ${input} --out ${output}`);
