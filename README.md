# saltside-bird

This is a REST API developed using MEAN stack. The dependencies are Express JS and Mongoose.
The DB used here is MongoDB and the 'test' database is used for all crud operations.

Pre-requisites before running this API:
---------------------------------------
1. NodeJS
2. MongoDB
3. Postman (Chrome plugin) or any rest client to test the API

Steps to test the API:
----------------------
a. Clone this repo to a local directory and do a "npm install" command which installs all dependencies.
b. Start the local mongodb instance and switch to test database, mongodb listens on 27017 by default.
c. Navigate to this project root directory and you must see a server.js file which is the entry point file.
d. Launch the REST API server with the command "node server.js". By default ,this is started on port 8080.

REST calls tested:
------------------
i) http://localhost:8080/birds  - GET call - should get all the visible birds.
ii) http://localhost:8080/birds - POST call - should create the bird record in the mongo db or return 400 if validation fails in the request body.
iii) http://localhost:8080/birds/{id} - GET call - should return the bird by id or return 404 error code if record does not exist.
iv) http://localhost:8080/birds/{id} - DELETE call - should delete the record by id or return 404 error code if record does not exist.

i have used chrome plugin POSTMAN to test the rest apis.

