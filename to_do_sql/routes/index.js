var express = require('express');
var router = express.Router();
// Import mysql. We got this from npm
const mysql = require(`mysql`);
const db_creds = require(`../config/config.js`);
// set up a connection to use and reuse...
const connection = mysql.createConnection(db_creds);

// We made the connection above, now run it
connection.connect();

//AFTER ALL THAT PAIN, WE CAN START WRITING AWESOME QUERY
/* GET home page. */
router.get('/', function(req, res, next) {
	let message = req.query.msg;
	if(message === `added`){
		message = `Your task was added!`;
	}else if(message === `deleted`){
		message = `Your taks was deleted!`;
	}

const selectQuery = `SELECT * FROM tasks`;

connection.query(selectQuery,(error, results)=>{
		if(error){throw error;}
		res.render(`index`, {
			message,
			title: `Express`,
			taskArray: results
		});
	})	
});

router.post(`/addItem`,(req, res)=>{
	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;
	// res...
	// 1. send
	// 2. render
	// 3. json
	// req.query is for get requests or query string
	// req.body is for data passed in via post
	// we know that someone submitted the form. 
	// We know that because they are at the post, addItem route.
	// we got the data the form sent out of the req.object and stored it. 
	// Now we need to put it into our Database (mysql)

	
	const insertQuery = 
	`INSERT into tasks
		(task_name, task_date)
		VALUES
		(?,?);`

	// query args:
	// 1. Query sting
	// 2. array correspondingt to ? in query
	// 3. callback to run when query is finished	
	console.log(`$$$$$$$$$$$$$$$$$$$$READY TO RUN THE QUERY$$$$$$$$$$$$$`);
	
	connection.query(insertQuery,[taskName, taskDate],(error, results)=>{
		if(error)throw error;
		console.log(`=============QUERY DID NOT ERROR< SENDING TO THE HOMEPAGE`);
		res.redirect(`/?msg=added`);
	})

	//res.json(req.query);

});

router.get(`/delete/:id`,(req, res)=>{
	const idToDelete = req.params.id;
	const deleteQuery = `DELETE FROM tasks WHERE id =?`;
	connection.query(deleteQuery,[idToDelete],(error,results)=>{
		if(error){throw error;}
		res.redirect(`/?msg=deleted`);
	})
})

module.exports = router;
