import 'aurelia-polyfills';
import 'jest-fetch-mock';
import { Options } from 'aurelia-loader-nodejs';
import { globalize } from 'aurelia-pal-nodejs';
import * as path from 'path';
Options.relativeToDir = path.join(__dirname, 'unit');
globalize();
