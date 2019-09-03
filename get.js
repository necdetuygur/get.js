var http = require('http');
var https = require('https');
var sleep = require('system-sleep');

function get(url, callback) {
    var finish = 0;
    var response = "";
    (url.indexOf('https') > -1 ? https : http).get(url, res => {
        res.on('data', data => response += data);
        if (typeof callback == "undefined") {
            res.on('end', () => {
                finish = 1;
            });
        } else {
            res.on('end', _ => callback(response));
        }
    });
    while (finish == 0) sleep(100);
    return response;
}

module.exports = get;
