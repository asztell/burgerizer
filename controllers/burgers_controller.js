// require dependencies

var express = require('express');
	burger 	= require('../models/burger.js');


// create router

var router = express.Router();


// get requests

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


// post requests

router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name'], [req.body['burger_name']], function () {
		res.redirect('/burgers');
	});
});


// put requests

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});


// export module

module.exports = router;