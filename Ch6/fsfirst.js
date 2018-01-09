var fs = require('fs');
var util = require('util');
var Mode = require('stat-mode');

fs.stat('./PHOENIX-LOGO-1-300x262.png', function(err,stats){
	if(err) return console.log(err);
	console.log(util.inspect(stats));

	var mode = new Mode(stats);
	console.log(mode.toString());
	console.log('Group execute ' + mode.group.execute);
	console.log('Others write ' + mode.others.write);
	console.log('Owner read ' + mode.owner.read);
});