require("dotenv").config({path: "./config.env"})

const connect = require("./connect");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT;
const dbo = connect;

const app = express();
app.use(cors());
app.use(express.json());


app.listen(port, async () => {
    // perform a database connection when server starts
    await dbo.connectToServer((err) => {
      if (err) console.log(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });


