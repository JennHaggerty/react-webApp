var config = require('./config'); // config for db connector/driver
var knex = require('knex')(config); // database connector/driver
var moment = require('moment');

// USER LOGIN
function getUsers(req, res, next) {
	var url = req.params.url;
	knex.select().table('users').where('url', url).then(function(users) {
		if (!users.length) {
			// no users found. move to next middleware or route
			return next();
		}
		return res.send(users[0]);
	})
  // do something with error, maybe even just:
	.catch(console.log)
}

function editUser (req, res, next) {
	var id = req.params.userId;
	var users = {};
	if (!req.body) {
		return res.send('no data provided!!');
	}
	if (req.body.name) {
		users.name = req.body.name;
	}
	if (req.body.email) {
		users.email = req.body.email;
	}
	if (req.body.password) {
		users.password = req.body.password;
	}
	
	knex('users').where('id', id).update(users)
		.then(function(){
			res.send(users);	
		})
		.catch(function (err) {
			console.log(err);
			res.send('something went wrong');
		})
}

// POSTS
function getPosts(req, res, next) {
	var userId = req.params.userId;
	knex.select().from('posts').orderBy('date', 'desc').then(function(posts) {
		posts = posts.map(function(post) {
			var _post = {};
			_post.title = post.title;
			_post.body = post.body;
			_post.date = moment(post.date).format('DD.MM.YYYY');
			_post.tags = post.tags;
			_post.id = post.id;
			//_post.featuredImg = post.featuredImg;
			return _post;
		})
		res.send(posts);
	});
}
function addPosts (req, res, next) {
	var title = req.body[0].title;
	var body = req.body[0].body;
	var tags = req.body[0].tags;

	//if (id === '' || id === undefined ){
//		addPosts(title, body, function(result) {
			//res.send(result);
			knex('posts')
				.insert({title, body, tags})
				.then(function(){
					res.send(req.body[0]);	
				})
				.catch(function (err) {
					console.log(err);
					res.send('something went wrong');
				})
		//})
	//}
}
function editPosts (req, res, next) {
	var posts = req.body;
	var postPromiseArray = posts.map(function (post) {
		return new Promise(function (resolve, reject) {
			var id = post.id;
			debugger;
			knex('posts')
				.update(post)
				.where('id', id)
				.then(function(){	
					resolve(post);
				})
				.catch(function (err) {
					console.log(err);
					reject('something went wrong');
				});
		});
	});

	Promise.all(postPromiseArray)
		.then(function(results) {
			res.send(posts);
		
		});
}
function deletePosts (req, res, next) {
	var id = req.query.id;
	console.log('You have deleted post id:', id);
	knex('posts')
		.where('id', id)
		.delete()
		.then(function(){	
			res.send();
		})
		.catch(function (err) {
			console.log(err);
			res.send('something went wrong');
		});
}

// PROJECTS
function getProjects(req, res, next) {
	var userId = req.params.userId;
	knex.select().from('projects').orderBy('date', 'desc').then(function(projects) {
		projects = projects.map(function(project) {
			var _project = {};
			_project.title = project.title;
			_project.body = project.body;
			_project.url = project.url;
			_project.date = moment(project.date).format('DD.MM.YYYY');
			_project.tags = project.tags;
			_project.id = project.id;
			//_project.featuredImg = project.featuredImg;
			return _project;
		})
		res.send(projects);
	});
}
function addProjects (req, res, next) {
	var title = req.body[0].title;
	var body = req.body[0].body;
	var url = req.body[0].url;
	var tags = req.body[0].tags;

	//if (id === '' || id === undefined ){
//		addProjects(title, body, function(result) {
			//res.send(result);
			knex('projects')
				.insert({title, body, url, tags})
				.then(function(){
					res.send(req.body[0]);	
				})
				.catch(function (err) {
					console.log(err);
					res.send('something went wrong');
				})
		//})
	//}
}
function editProjects (req, res, next) {
	var projects = req.body;
	var postPromiseArray = projects.map(function (project) {
		return new Promise(function (resolve, reject) {
			var id = project.id;
			debugger;
			knex('projects')
				.update(project)
				.where('id', id)
				.then(function(){	
					resolve(project);
				})
				.catch(function (err) {
					console.log(err);
					reject('something went wrong');
				});
		});
	});

	Promise.all(postPromiseArray)
		.then(function(results) {
			res.send(projects);
		
		});
}
function deleteProjects (req, res, next) {
	var id = req.query.id;
	console.log('You have deleted project id:', id);
	knex('projects')
		.where('id', id)
		.delete()
		.then(function(){	
			res.send();
		})
		.catch(function (err) {
			console.log(err);
			res.send('something went wrong');
		});
}

module.exports = {
   getUsers,
   getPosts,
   addPosts,
   editPosts,
   deletePosts,
   getProjects,
   addProjects,
   editProjects,
   deleteProjects
}
