const express = require("express")

const userRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("./connect");
const ObjectId = require("mongodb").ObjectId;

// Retrieve All Users
userRoutes.route("/users").get((request, response) => {
    let db_connect = dbo.getDb();
    db_connect.collection("Users")
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            response.json(result);
        });
});
   
// Retrieve a user by its id
userRoutes.route("/users/:id").get((request, response) => {
    let db_connect = dbo.getDb(); 
    let myquery = { _id: ObjectId(request.params.id) };
    db_connect.collection("Users")
        .findOne(myquery, (err, result) => {
            if (err) throw err;
            response.json(result);
        });
});

// Create User
userRoutes.route("/users").post((request, response) => {
    let db_connect = dbo.getDb();
    let myobj = {
        email: request.body.email,
        username: request.body.username,
        joinDate: request.body.joinDate,
        challenges: request.body.challenges
    };

    db_connect.collection("Users")
        .insertOne(myobj, (err, result) => {
            if (err) throw err;
            response.json(result);
        });
});

module.exports = userRoutes