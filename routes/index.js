var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	// var grid = {'grid': false}
	projects['grid'] = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){


	// var grid = {'grid': true}
	projects['grid']=true;
	res.render('index', projects);	
	// var grid = true; // of by one, our first project has index 0
 //  	res.json(project);

 //  	res.render('index', projects);
};

