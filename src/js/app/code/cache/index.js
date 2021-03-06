/**
* @Author: robin
* @Date:   2017-05-08 10:37
* @Email:  xin.lin@qunar.com
* @Last modified by:   robin
* @Last modified time: 2017-05-08 10:37
*/


var Factory = require('../annotation/Factory');

module.exports = (function(opts) {
    var cache = opts.zookeeper && opts.zookeeper != 'undefined' ? require('./zkCache') : require('./cache');
    return new cache(opts);
})(process.env);
