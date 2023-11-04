const express = require("express")

const challengeRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("./connect");
const ObjectId = require("mongodb").ObjectId;

// Retrieve All challenges
challengeRoutes.route("/challenges").get((request, response) => {
    let db_connect = dbo.getDb();
    db_connect.collection("Challenges")
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            response.json(result);
        });
});
   
// Retrieve a challenge by its id
userRoutes.route("/challenges/:id").get((request, response) => {
    let db_connect = dbo.getDb(); 
    let myquery = { _id: ObjectId(request.params.id) };
    db_connect.collection("Challenges")
        .findOne(myquery, (err, result) => {
            if (err) throw err;
            response.json(result);
        });
});

// Create Challenge
userRoutes.route("/challenges").post((request, response) => {
    let db_connect = dbo.getDb();
    let myobj = {
        title: request.body.title,
        description: request.body.description,
        winners: request.body.winners,
        startDate: request.body.startDate,
        endDate: request.body.endDate
    };

    db_connect.collection("Challenges")
        .insertOne(myobj, (err, result) => {
            if (err) throw err;
            response.json(result);
        });
});

module.exports = challengeRoutes