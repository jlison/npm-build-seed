'use strict';

import { cp } from "shelljs";

let input = "./src/fonts/";
let output = "./dist/";

cp('-R', `${input}`, `${output}`);
