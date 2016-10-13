var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var utils = require("./utils.js");

var mongoose = require('mongoose');
var uristring = "mongodb://localhost:27017/test";

mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    }
});
//Bird Schema model used for CRUD operations
var Bird = require('./app/models/bird');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// =============================================================================
var router = express.Router();

// bird rest api starts here
router.route('/birds')
    //find all birds that are visible
    .get(function(req, res) {
        Bird.find({
                visible: true
            },
            utils.BIRD_PROJECTION,
            function(err, birds) {
                if (err) {
                    res.status(500);
                    console.err(err);
                    res.send(err);
                }
                res.status(200);
                res.json(birds);
            });
    })
    //create a record
    .post(function(req, res) {
        //do validation and send 400 for bad request
        var validationErrors = utils.validateReqBody(req.body);
        if (validationErrors.length > 0) {
            res.status(400);
            res.send(validationErrors);
        }
        var bird = new Bird();
        bird.name = req.body.name;
        bird.family = req.body.family;
        bird.visible = req.body.visible || true;
        bird.added = req.body.added || utils.getDateInYYYYMMDD();
        var conts = req.body.continents.split(",");
        for (var i = 0; i < conts.length; i++) {
            if (bird.continents.indexOf(conts[i]) <= -1) {
                bird.continents.push(conts[i]);
            }
        }
        bird.save(function(err) {
            if (err) {
                res.status(500);
                res.send(err);
                console.err("Error saving record - " + req.body.name);
            }
            res.status(200);
            res.json(bird);
        });
    });

router.route('/birds/:id')
    //get a record by id
    .get(function(req, res) {
        Bird.findById(req.params.id, function(err, bird) {
            if (err) {
                res.status(404);
                res.send('Record with id - ' + req.params.id + ' not found.');
            }
            res.status(200);
            res.json(bird);
        });
    })
    //delete a record by id
    .delete(function(req, res) {
        Bird.remove({
            _id: req.params.id
        }, function(err, bird) {
            if (err) {
                res.status(404);
                res.send('Record not found with id - ' + req.params.id);
            }
            res.status(200);
            res.json('Successfully deleted record with id - ' + req.params.id);
        });

    });

app.use('/', router);
app.listen(port);
console.log('BHARANI CHENNU [saltside] - Bird API started on port - ' + port);
