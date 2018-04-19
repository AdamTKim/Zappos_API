//Require mongoose
var mongoose = require('mongoose');

//Generate schema for menu items
var menu_items_schema = mongoose.Schema({
	Item_Name:{
		type: String,
		required: true
	},
	Menu_ID:{
		type: String,
		required: true
	},
	Calories:{
		type: Number
	}
});

//Generate model using previously generated schema
var menu_items = module.exports = mongoose.model('menu items', menu_items_schema);

//Function to get menu items
module.exports.GetMenuItems = function(callback, limit){
	menu_items.find(callback).limit(limit);
}

//Function to get a specified menu item by ID
module.exports.GetMenuItemByID = function(id, callback){
	menu_items.findById(id, callback);
}

//Function to get a specified menu item by Name
module.exports.GetMenuItemByName = function(name, callback){
	menu_items.find({ Item_Name: name}, callback);
}

//Function to get a specified menu item by Menu Name
module.exports.GetMenuItemByMenuID = function(menu_id, callback){
	menu_items.find({ Menu_ID: menu_id}, callback);
}

//Function to add a new menu item to the collection
module.exports.AddMenuItem = function(menu_item, callback){
	menu_items.create(menu_item, callback);
}

//Function to update a menu item in the collection
module.exports.UpdateMenuItem = function(id, menu_item, options, callback){
	var id_query = {_id: id};
	var update_query = {
		Item_Name: menu_item.Item_Name,
		Menu_ID: menu_item.Menu_ID,
		Calories: menu_item.Calories
	};
	menu_items.findOneAndUpdate(id_query, update_query, options, callback);
}

//Function to delete a menu item from the collection
module.exports.DeleteMenuItem = function(id, callback){
	var id_query = {_id: id};
	menu_items.remove(id_query, callback);
}