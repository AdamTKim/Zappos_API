************************************************************************************************************************
SETUP ISN'T NECESSARY AS IT IS ALREADY RUNNING ON A PERSONAL SERVER. NAVIGATE TO akdyn.asuscomm.com:6060 TO GET STARTED.
IF FOR SOME REASON THE SERVER IS DOWN YOU CAN EITHER CONTACT ME OR CONTINUE WITH THE STEPS BELOW
************************************************************************************************************************




INSTRUCTIONS ARE WRITTEN FOR A WINDOWS INSTALLATION


DEPENDENCIES: This project uses Node.js, Mongoose, Body-Parser, Express, Nodemon, Git Bash and MongoDB


[RestEasy for Chrome is what I used to perform API calls, any program that supports API requests should work. Download for RestEasy can be found here: https://chrome.google.com/webstore/detail/resteasy/nojelkgnnpdmhpankkiikipkmhgafoch?hl=en-US]


To install and run this project, please follow the steps below:

1) Install Node.js
	- Node.js can be found and downloaded from https://nodejs.org/en/
	- Ensure that Git Bash has been installed as well since it'll be used to run Node

2) Install MongoDB
	- MongoDB can be found and downloaded from https://www.mongodb.com/download-center?jmp=nav#community
	- The collections I used to create this project will be bundled in a folder called "Dumped_MongoDB", if starting fresh ensure that the fields (columns) are named the same else my program will not be able to communicate with the database.

3) Intall Git Bash
	- Git can be installed and downloaded from https://git-scm.com/downloads	
	
4) Install Mongoose, Body-Parser, Nodemon and Express
	- Start a Git Bash cmd line within the program directory.
	- Since my program requires these modules, the command "npm install" will install all of the dependencies with a single command (EXCEPT FOR NODEMON).
	- If you wish to install them individually the commands for each will be listed below (MUST PERFORM FOR NODEMON):
		- Nodemon: "npm install -g nodemon"
		- Mongoose: "npm install mongoose"
		- Express: "npm install express --save"
		- Body-Parser: "npm install body-parser"

5) Start MongoDB
	- Open 2 cmd line windows (may need admin privileges) and navigate to where MongoDB is installed.
	- Run the Mongod and Mongo executables from the cmd line (one in each window).

6) Restore MongoDB Database
	- To restore from my included DB, open a cmd line windows (may need admin privileges) and navigate to where MongoDB is installed.
	- When there, run the command "mongorestore -d Restaurants <directory_backup_location>". This will restore my original database.

7) Start Node
	- Start a Git Bash cmd line within the program directory (or use previous window if still open).
	- Run the command "nodemon", this will start running node app.js as localhost.
	- Currently my program listens for traffic on port 6060, this can be changed in app.js if blocked.

8) Finished
	- If running as a localhost, navigate to localhost:<portnumber>/api/[Restaurants || Menus || MenuItems] to get started.




NOTES: I'll include a diagram of my MongoDB schema to avoid any confusion on how it was set up.


COMMANDS: I've set it up to where you can search for items directly from the URL. I'll list the various commands below.


SHOW ALL ITEMS IN COLLECTION
	- localhost:6060/api/Restaurants
	- localhost:6060/api/Menus
	- localhost:6060/api/MenusItems

FIND RESTAURANTS BY ID/NAME
	- localhost:6060/api/Restaurants/_id/<parameter>
	- localhost:6060/api/Restaurants/Restaurant_Name/<parameter>

FIND MENUS BY ID/NAME/RESTAURANT_ID
	- localhost:6060/api/Menus/_id/<parameter>
	- localhost:6060/api/Menus/Menu_Name/<parameter>
	- localhost:6060/api/Menus/Restaurant_ID/<parameter>

FIND MENU ITEMS BY ID/NAME/MENU_ID
	- localhost:6060/api/MenusItems/_id/<parameter>
	- localhost:6060/api/MenusItems/Item_Name/<parameter>
	- localhost:6060/api/MenusItems/Menu_ID/<parameter>


POST, PUT and DELETE all require a REST client like RestEasy to perform.

POST SYNTAX
	- localhost:6060/api/Restaurants
	- localhost:6060/api/Menus
	- localhost:6060/api/MenusItems

PUT/DELETE SYNTAX
	- localhost:6060/api/Restaurants/<_id parameter>
	- localhost:6060/api/Menus/<_id parameter>
	- localhost:6060/api/MenusItems/<_id parameter>