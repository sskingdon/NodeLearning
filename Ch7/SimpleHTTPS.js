var fs = require('fs'),
	https = require('https');

var privateKey = fs.readFileSync('site.key').toString();
var certificate = fs.readFileSync('final.crt').toSTring();

var option = {
	key : privateKey,
	cert : certificate
};

https.createServer(option,function(req,res){
	res.writeHead(200);
	res.end("Hello Secure Word\n");
}).listen(443);