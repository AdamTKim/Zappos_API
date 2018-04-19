//Require mongoose
var mongoose = require('mongoose');

//Generate schema for menus
var menus_schema = mongoose.Schema({
	Menu_Name:{
		type: String,
		required: true
	},
	Restaurant_ID:{
		type: String,
		required: true
	},
});

//Generate model using previously generated schema
var menus = module.exports = mongoose.model('menus', menus_schema);

//Function to get menus
module.exports.GetMenus = function(callback, limit){
	menus.find(callback).limit(limit);
}

//Function to get a specified menu by ID
module.exports.GetMenuByID = function(id, callback){
	menus.findById(id, callback);
}

//Function to get a specified menu by Name
module.exports.GetMenuByName = function(name, callback){
	menus.find({ Menu_Name: name}, callback);
}

//Function to get a specified menu by Restaurant Name
module.exports.GetMenuByRestID = function(rest_id, callback){
	menus.find({ Restaurant_ID: rest_id}, callback);
}

//Function to add a new menu to the collection
module.exports.AddMenu = function(menu, callback){
	menus.create(menu, callback);
}

//Function to update a menu in the collection
module.exports.UpdateMenu = function(id, menu, options, callback){
	var id_query = {_id: id};
	var update_query = {
		Menu_Name: menu.Menu_Name,
		Restaurant_ID: menu.Restaurant_ID
	};
	menus.findOneAndUpdate(id_query, update_query, options, callback);
}

//Function to delete a menu from the collection
module.exports.DeleteMenu = function(id, callback){
	var id_query = {_id: id};
	menus.remove(id_query, callback);
}