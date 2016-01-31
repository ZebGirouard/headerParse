'use strict';

function HeaderParseHandler () {
	
	this.getHeader = function (req, res) {
		var ipaddress = req.headers['x-forwarded-for'];
		var langRegEx = /(.+?)\,/;
		var language = req.headers['accept-language'].match(langRegEx)[1];
		var osRegEx = /\((.+?)\)/;
		var software = req.headers['user-agent'].match(osRegEx)[1];
		//var dateTime = req.params.dateTime;
		res.json({ipaddress: ipaddress, language: language, software: software});
	};
}

module.exports = HeaderParseHandler;
