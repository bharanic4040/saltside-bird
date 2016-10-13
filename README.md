# saltside-bird

This is a REST API developed using MEAN stack. The dependencies are Express JS and Mongoose.
The DB used here is MongoDB and the 'test' database is used for all crud operations.

Pre-requisites to be installed before running this API:
-------------------------------------------------------
1. NodeJS
2. Mongo DB
3. Postman (Chrome plugin) or any rest client to test the API

Steps to test the API:
----------------------
a. Clone this repo to a local machine directory and from the root directory, do an "npm install" command which installs all dependencies.<br/>
b. Start the local mongodb instance and check if mongodb is running on 27017.<br/>
c. Navigate to the project root directory and you must see a server.js file which is the entry point file.<br/>
d. Launch the REST API server with the command "node server.js". By default ,this is started on port 8080.<br/>
e. From here on ,the below rest apis can be tested.

REST calls tested:
------------------
i) http://localhost:8080/birds  - GET call - should get all the visible birds.<br/>
ii) http://localhost:8080/birds - POST call - should create the bird record in the mongo db or return 400 [with some custom error message] if validation fails in the request body <br/>
iii) http://localhost:8080/birds/{id} - GET call - should return the bird by id or return 404 error code if record does not exist <br/>
iv) http://localhost:8080/birds/{id} - DELETE call - should delete the record by id or return 404 error code if record does not exist <br/>

I have used chrome plugin POSTMAN plugin as the client to test the rest apis.<br/>

