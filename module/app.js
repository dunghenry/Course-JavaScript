// import logger from './logger/index.js';

import {newLogger} from './logger/index.js'

import * as types from './constants.js';
console.log(types)
// logger("Xin chao")

//C2 
newLogger("Hi", types.TYPE_ERROR)