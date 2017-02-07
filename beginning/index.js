var server = require('./servers.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandles.js');
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
server.start(router.route,handle);
