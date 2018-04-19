INSTRUCTIONS ARE WRITTEN FOR A WINDOWS INSTALLATION


DEPENDENCIES: This project uses Node.js, Mongoose, Body-Parser, Express and MongoDB


[RestEasy for Chrome is what I used to perform API calls, any program that supports API requests should work. Download for RestEasy can be found here: https://chrome.google.com/webstore/detail/resteasy/nojelkgnnpdmhpankkiikipkmhgafoch?hl=en-US]


To install and run this project, please follow the steps below:

1) Install Node.js
	- Node.js can be found and downloaded from https://nodejs.org/en/
	- Ensure that Git Bash has been installed as well since it'll be used to run Node

2) Install MongoDB
	- MongoDB can be found and downloaded from https://www.mongodb.com/download-center?jmp=nav#community
	- The collections I used to create this project will be bundled, if starting fresh ensure that the 
	fields (columns) are named the same else my program will not be able to communicate with the database.

3) Install Mongoose, Body-Parser and Express
	- Start a Git Bash cmd line within the program directory.
	- Since my program requires these modules, the command "npm install" will install all of the dependencies with a single command.
	- If you wish to install them individually the commands for each will be listed below:
	- Mongoose: "npm install mongoose"
	- Express: "npm install express --save"
	- Body-Parser: "npm install body-parser"

4) Start MongoDB
	- Open 2 cmd line windows (may need admin privileges) and navigate to where MongoDB is installed.
	- Run the Mongod and Mongo executables from the cmd line (one in each window).

5) Start Node
	- Start a Git Bash cmd line within the program directory (or use previous window if still open).
	- Run the command "nodemon", this will start running node app.js as localhost.
	- Currently my program listens for traffic on port 5050, this can be changed in app.js if blocked.