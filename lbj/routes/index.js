var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//res.render takes 2 args:
// 1.The name of the view to load
// 2.An object to send to that view
	const atlTeams = [
	`Braves`,
	`Falcons`, 
	`United`, 
	`Hawks`
	]
  res.render('index', { atlTeams: atlTeams });
});

router.get(`/football`, (req, res)=> {
	const atlTeams = [
	`The Player City`,
	`Braves`,
	`Falcons`, 
	`United`, 
	`Hawks`
	]
	res.render(`index`, {atlTeams});
});

module.exports = router;
