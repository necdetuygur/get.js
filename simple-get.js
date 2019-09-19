var http = require('http');
var https = require('https');

function get(url, callback) {
    var response = "";
    url = url.indexOf("http") > -1 ? url : "http://" + url;
    (url.indexOf('https') > -1 ? https : http).get(url, res => {
        res.on('data', data => response += data);
        res.on('end', _ => callback(response));
    });
}

module.exports = get;
