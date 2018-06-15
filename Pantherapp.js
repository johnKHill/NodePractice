// http is part of core. Include it so we can make a server
const http = require(`http`);
const fs = require(`fs`);

// function renderHomePage(req, res);
function renderHomePage(){
	// res.write(200,{
	// 	'content-type':'text.html'
	// });
	// res.end('<h1>Your page has loaded</h1>');
	
	const theHTMLtoGet = fs.readFileSync(`./homepage.html`);
	return theHTMLtoGet;
}
// create the server
const server = http.createServer((req, res)=>{
	if(req.url ===`/`){
		// renderHomePage(req,res);
		res.writeHead(200,{'content-type':'text/html'});
		res.end(renderHomePage());
	} else if(req.url === `/blackPanther.jpg`){
		res.writeHead(200,{'content-type':'image/jpg'});
		const img = fs.readFileSync('blackPanther.jpg');
		res.end(img);
	}else{
		console.log(req.url + ` was not found`);
		res.end(`Page Not Found`);
	}	
})

server.listen(4000);
console.log(`Server is listening on port 4000...`);

