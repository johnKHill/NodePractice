const http= require('http');

const apikey = 'e312dbeb8840e51f92334498a261ca1d';

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

// the http.get method takes 2 args:
// 1. Where (endpoint)
// 2. Code to run when back, with the data as a param
let weatherData = '';
// data is a built in event for response data
const request = http.get(weatherUrl, (theResponse)=>{
	theResponse.on('data',(chunkOfData)=>{
		console.log(chunkOfData);
		console.log('\n');
		weatherData = chunkOfData;

	})
	// end is a built-in event for response data
	theResponse.on('end',()=> {
		console.log(typeof(JSON.parse(weatherData)));
		console.log(JSON.parse(weatherData));
		// console.log(Number('2'));
		// console.log(Number('asdfasdf'));	
	});

});