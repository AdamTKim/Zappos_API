//Require mongoose
var mongoose = require('mongoose');

//Generate schema for restaurants
var restaurants_schema = mongoose.Schema({
	Restaurant_Name:{
		type: String,
		required: true
	}
});

//Generate model using previously generated schema
var restaurants = module.exports = mongoose.model('restaurants', restaurants_schema);

//Function to get restaurants
module.exports.GetRestaurants = function(callback, limit){
	restaurants.find(callback).limit(limit);
}

//Function to get a specified restaurant by ID
module.exports.GetRestaurantByID = function(id, callback){
	restaurants.findById(id, callback);
}

//Function to get a specified restaurant by Name
module.exports.GetRestaurantByName = function(name, callback){
	restaurants.find({ Restaurant_Name: name}, callback);
}

//Function to add a new restaurant to the collection
module.exports.AddRestaurant = function(restaurant, callback){
	restaurants.create(restaurant, callback);
}

//Function to update a restaurant in the collection
module.exports.UpdateRestaurant = function(id, restaurant, options, callback){
	var id_query = {_id: id};
	var update_query = {
		Restaurant_Name: restaurant.Restaurant_Name
	};
	restaurants.findOneAndUpdate(id_query, update_query, options, callback);
}

//Function to delete a restaurant from the collection
module.exports.DeleteRestaurant = function(id, callback){
	var id_query = {_id: id};
	restaurants.remove(id_query, callback);
}