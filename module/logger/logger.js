import {TYPE_LOG} from '../constants.js'
function logger(msg, type=TYPE_LOG) {
    console[type](msg);
}
export default logger;