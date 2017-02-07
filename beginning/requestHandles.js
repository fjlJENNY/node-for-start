var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');
function start(res){
	console.log('Request handler start was called');
	//var body = '<html><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /></head><body><form action="/upload" method="post"><textarea name="text" rows="20" cols="60"></textarea><input type="submit" value="submit value"/></form></body></html>'
	var body = '<form action="/upload" method="post"><input type="file" name="upload" enctype="multipart/form-data"><input type="submit" value="submit value"/></form>';
	res.writeHead(200,{'Content-Type':'text/html'}); 
	res.write(body);
	res.end();
}

function upload(res,req){
	console.log('Request handler upload was called');
	var form = new formidable.IncomingForm();
	form.parse(req,function(error,fields,files){
		console.log(fields);
		//fs.renameSync(fields.upload,'./temp/test.jpg');
		res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
		res.write('received image:<br>');
		res.write('is wrong!!!!!!');
		res.write('没有存储到服务器内')
		//res.write('<img src="/show">');
		res.end();
	});
}

function show(res,req){
	console.log('request handler show was called');
	fs.readFile('./tmp/test.jpg','binary',function(err,file){
		if(err){
			res.writeHead(500,{'Content-Type':'text/plain'});
			
			res.end(error);	
		}else{
			res.writeHead(200,{'Content-Type':'text/plain'});
		
			res.end(file,'binary');
		}
	});
}
exports.start = start ; 
exports.upload = upload;
exports.show = show;