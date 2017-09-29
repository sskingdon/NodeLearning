var repl= require('repl');

var context = repl.start({prompt:'Sanchez>',
						  replModde:repl.REPL_MODE_STRICT,
				          ignoreUndefined:true,}).context;

context.request = require('request');
context.underscore = require('underscore');
context.q = require('q');
