// At the top, put your required NOde modules. 
// Required is like the node version of <script>

// http is part of node core!. We don't have to install or ask for it. 
// It comes with node, just require it. It doesn't come with bulk ware
const http = require("http");
// console.log(typeof(http));

// fs = file system. fs gives access to the computer its running on

const fs = require("fs");

// createServer takes 2 args:
// 1. Request
// 2.Response
const server = http.createServer((req, res)=> {
	// console.log(`Inside createServer`);
	console.log(req.url);


	if(req.url === `/`){
		// // Writehead takes 2 args:
		// 1. Status code to send back
		// 2. header obect which need to include mime type of whatever is being sent back
		res.writeHead(200,{'content-type':'text/html'});
		res.write(`<h1>Server responding!</h1>`);
		res.end();
	} else {
		res.writeHead(404,{'content-type': 'text/html'});
		res.write('<h1>Request page not found!</h1>');
		res.end();
	}
});

// Tell the server we created with the HHTP object to listen for http traffic on port 8080;
// When the request come in on port 8080, via http, the callback

server.listen(8080);

