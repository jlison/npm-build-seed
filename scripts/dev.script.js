'use strict';

import { exec } from "shelljs";

exec(`watch \"npm run build\" src/ -d -u -p=\"/(_[^\\s]+|css|node_modules)/\"`);
