// We have access to the express module because we used NPM to install it.
// Unlike http and fs, it's not part of the  core, it's an extension
const express = require(`express`);
//console.log(express);
const app = express();
//app.get take 2 endpoints:
// 1.The endpoiont with a verb
// 2. callback to run upon request for that route
app.get('/', (req, res) => res.send('Hey Young World, the World is yours!'));

app.listen(3000, () => console.log('App is listening on port 3000!'));
