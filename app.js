//Required modules and their respective variables
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var objectid = require('mongodb').ObjectID;

//Required files that house each collections respective functions (models)
restaurants_file = require('./models/restaurants');
menus_file = require('./models/menus');
menu_items_file = require('./models/menu_items');

//Initialize body parser
app.use(body_parser.json());

//For printing JSON as pretty
app.set('json spaces', 2);

//Connecting to Mongoose
mongoose.connect('mongodb://localhost/Restaurants');
var db = mongoose.connection;

//Route for landing page
app.get('/', function(req, res){
	res.send('Please use /api/Restaurants || /api/Menus || /api/MenuItems');
});


//*****************************************************************************************************
//Routes for accessing each collection
app.get('/api/Restaurants', function(req, res){
	restaurants_file.GetRestaurants(function(err, restaurants){
		if(err){
			throw err;
		}
		else{
			if(restaurants == undefined || restaurants.length == 0){
				res.send('No Results');
			}
			else{
				res.json(restaurants);
			}
		}
	});
});


app.get('/api/Menus', function(req, res){
	menus_file.GetMenus(function(err, menus){
		if(err){
			throw err;
		}
		else{
			if(menus == undefined || menus.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menus);
			}
		}
	});
});


app.get('/api/MenuItems', function(req, res){
	menu_items_file.GetMenuItems(function(err, menu_items){
		if(err){
			throw err;
		}
		else{
			if(menu_items == undefined || menu_items.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menu_items);
			}
		}
	});
});


//*****************************************************************************************************
//Routes for custom searches for Restaurants
app.get('/api/Restaurants/_id/:_id', function(req, res){
	if(objectid.isValid(req.params._id)){
		restaurants_file.GetRestaurantByID(req.params._id, function(err, restaurant){
			if(err){
				throw err;
			}
			res.json(restaurant);
		});
	}
	else{
		res.send('Not a valid ObjectID');
	}
});


app.get('/api/Restaurants/Restaurant_Name/:restaurant_name', function(req, res){
	restaurants_file.GetRestaurantByName(req.params.restaurant_name, function(err, restaurant){
		if(err){
			throw err;
		}
		else{
			if(restaurant == undefined || restaurant.length == 0){
				res.send('No Results');
			}
			else{
				res.json(restaurant);
			}
		}
	});
});


//*****************************************************************************************************
//Routes for custom searches for Menus
app.get('/api/Menus/_id/:_id', function(req, res){
	if(objectid.isValid(req.params._id)){
		menus_file.GetMenuByID(req.params._id, function(err, menu){
			if(err){
				throw err;
			}
			res.json(menu);
		});
	}
	else{
		res.send('Not a valid ObjectID');
	} 
});


app.get('/api/Menus/Menu_Name/:menu_name', function(req, res){
	menus_file.GetMenuByName(req.params.menu_name, function(err, menu){
		if(err){
			throw err;
		}
		else{
			if(menu == undefined || menu.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menu);
			}
		}
	});
});

app.get('/api/Menus/Restaurant_ID/:restaurant_id', function(req, res){
	menus_file.GetMenuByRestID(req.params.restaurant_id, function(err, menu){
		if(err){
			throw err;
		}
		else{
			if(menu == undefined || menu.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menu);
			}
		}
	});
});


//*****************************************************************************************************
//Routes for custom searches for Menu Items
app.get('/api/MenuItems/_id/:_id', function(req, res){
	if(objectid.isValid(req.params._id)){
		menu_items_file.GetMenuItemByID(req.params._id, function(err, menu_item){
			if(err){
				throw err;
			}
			res.json(menu_item);
		});
	}
	else{
		res.send('Not a valid ObjectID');
	}
});

app.get('/api/MenuItems/Item_Name/:item_name', function(req, res){
	menu_items_file.GetMenuItemByName(req.params.item_name, function(err, menu_item){
		if(err){
			throw err;
		}
		else{
			if(menu_item == undefined || menu_item.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menu_item);
			}
		}
	});
});

app.get('/api/MenuItems/Menu_ID/:menu_id', function(req, res){
	menu_items_file.GetMenuItemByMenuID(req.params.menu_id, function(err, menu_item){
		if(err){
			throw err;
		}
		else{
			if(menu_item == undefined || menu_item.length == 0){
				res.send('No Results');
			}
			else{
				res.json(menu_item);
			}
		}
	});
});


//*****************************************************************************************************
//POST Requests for each collection
//NOTE: Due to lack of authenication and lack of parameter sanitation, care must be taken
//to avoid SQL Injection style attacks. Avoid using this program in a production environment.
app.post('/api/Restaurants', function(req, res){
	var restaurant = req.body;
	restaurants_file.AddRestaurant(restaurant, function(err, restaurant){
		if(err){
			throw err;
		}
		res.json(restaurant);
	});
});

app.post('/api/Menus', function(req, res){
	var menu = req.body;
	menus_file.AddMenu(menu, function(err, menu){
		if(err){
			throw err;
		}
		res.json(menu);
	});
});

app.post('/api/MenuItems', function(req, res){
	var menu_item = req.body;
	menu_items_file.AddMenuItem(menu_item, function(err, menu_item){
		if(err){
			throw err;
		}
		res.json(menu_item);
	});
});




//*****************************************************************************************************
//PUT Requests for each collection
app.put('/api/Restaurants/:_id', function(req, res){
	var _id = req.params._id;
	var restaurant = req.body;
	restaurants_file.UpdateRestaurant(_id, restaurant, {}, function(err, restaurant){
		if(err){
			throw err;
		}
		res.json(restaurant);
	});
});

app.put('/api/Menus/:_id', function(req, res){
	var _id = req.params._id;
	var menu = req.body;
	menus_file.UpdateMenu(_id, menu, {}, function(err, menu){
		if(err){
			throw err;
		}
		res.json(menu);
	});
});

app.put('/api/MenuItems/:_id', function(req, res){
	var _id = req.params._id;
	var menu_item = req.body;
	menu_items_file.UpdateMenuItem(_id, menu_item, {}, function(err, menu_item){
		if(err){
			throw err;
		}
		res.json(menu_item);
	});
});

//*****************************************************************************************************
//DELETE Requests for each collection
app.delete('/api/Restaurants/:_id', function(req, res){
	var _id = req.params._id;
	if(objectid.isValid(req.params._id)){
		restaurants_file.DeleteRestaurant(_id, function(err, restaurant){
			if(err){
				throw err;
			}
			else if(restaurant != null){
				res.send('Restaurant with ID: ' + _id + ' deleted.');
			}
		});
	}
	else{
		res.send('Not a valid ObjectID');
	}
});

app.delete('/api/Menus/:_id', function(req, res){
	var _id = req.params._id;
	if(objectid.isValid(req.params._id)){
		menus_file.DeleteMenu(_id, function(err, menu){
			if(err){
				throw err;
			}
			else if(menu != null){
				res.send('Menu with ID: ' + _id + ' deleted.');
			}
		});
	}
	else{
		res.send('Not a valid ObjectID');
	}
});

app.delete('/api/MenuItems/:_id', function(req, res){
	var _id = req.params._id;
	if(objectid.isValid(req.params._id)){
		menu_items_file.DeleteMenuItem(_id, function(err, menu_item){
			if(err){
				throw err;
			}
			else if(menu_item != null){
				res.send('Menu Item with ID: ' + _id + ' deleted.');
			}
		});
	}
	else{
		res.send('Not a valid ObjectID');
	}
});


//Listen on Port 5050 for traffic
app.listen(6060);
console.log('Starting Connection on Port 6060');