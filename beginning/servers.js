var http = require('http');
var url = require('url');
var formidable = require('formidable');
var sys = require('sys');

/*依赖注入的方式 添加路由模块*/
function start(route,handle){
	http.createServer(function(req,res){
		var pathname = url.parse(req.url).pathname;
		if(req.url==='/show'){
			route(handle,pathname,res);
			return;
		}
		if(req.url==='/upload'&&req.method.toLowerCase()==='post'){
			var form = new formidable.IncomingForm();
			// form.parse(req,function(err,fields,files){
			// 	res.writeHead(200,{'content-type':'text/plain'});
			// 	res.write('received upload:\n\n');
			// 	res.end(sys.inspect({fields:fields,files:files}));
			// });
			route(handle, pathname, res,req);
			return ;
		}
		// var postData = '';
		// req.setEncoding('utf-8');
		// req.addListener("data", function(postDataChunk) {
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk '"+
		// 	postDataChunk + "'.");
		// });
		// req.addListener("end", function() {
		 	route(handle, pathname, res,req);
		// });
		//res.writeHead(200,{'Content-Type':'text/html'});
		//res.end('<form action="/upload" method="post"><input type="file" name="upload" enctype="multipart/form-data" multiple="multiple"><input type="submit" value="submit value"/></form>')
		
	}).listen(8888);
	console.log('server is running');
}

exports.start = start;
