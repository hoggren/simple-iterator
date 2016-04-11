/*
* Usage:
* var iterator = require('simple-iterator');
* iterator(array, function(index) {
*     console.log(this + ' item has index ' + index);
* });
*/
module.exports = function(a, callback) {
    if(a.constructor !== Array)
        return null;

    for(var i = 0; i < a.length; i++) {
        callback.call(a[i], i);
    }
};
