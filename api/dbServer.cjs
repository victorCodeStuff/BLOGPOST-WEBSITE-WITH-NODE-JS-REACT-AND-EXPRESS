const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require ('body-parser')
const session = require('express-session');
const jwt = require('jsonwebtoken')


// db config
require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
/*
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge:1000 * 60 * 60 * 24 * 7,
    httpOnly : true
  }
}
*/
const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected!");
});
app.use(express.json());

app.use( cors({
    origin: ["http://localhost:5173"], // this is necessary because tells to the cors what is the orgin of the request
    credentials: true,
  })
);





/*
app.use(session(sessionConfig))
*/
app.use(bodyParser.json())

app.post("/createUser", async (req, res) => {
  const user = req.body.name; //to make a json post request you will use name
  const password = req.body.password; //to make a json post request you will use pasword
  /*example:
   {
    "name":"userrrr",
    "password":"passs"
}
 */

  db.getConnection(async (err, connection) => {
    if (err) throw err;

    const sqlSearch = "SELECT * FROM userTable WHERE user = ?";
    const search_query = mysql.format(sqlSearch, [user]);

    const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)";
    const insert_query = mysql.format(sqlInsert, [user, password]);

    await connection.query(search_query, async (err, result) => {
      if (err) throw err;
      console.log("-------> Search result");
      console.log(result.length);

      if (result.length != 0) {
        connection.release();
        console.log("-------> User already exists");
        res.sendStatus(409);
      } else
        await connection.query(insert_query, (err, result) => {
          connection.release();
          if (err) throw err;
          console.log(result.insertId);
          res.sendStatus(201);
        });
    });
  });
});
app.post("/login", async (req, res) => {


  
const userName = req.body.name;
  const userPassword = req.body.password;
  
  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "SELECT * FROM userTable WHERE user = ? AND password = ?";
    const search_query = mysql.format(sqlSearch, [userName, userPassword])

    await connection.query(search_query, async (err, result) => {
      connection.release();
      if (err) throw err;

      if (result.length == 0) {
        console.log("-------> Credentals are incorrect");
      } else {
        const password = result[0].password;
        const name = result[0].name;

        if (userName === userName && userPassword === password) {
          const sqlIdSearch = "SELECT userId FROM userTable WHERE user = ?";
          const sqlIdQuery = mysql.format(sqlIdSearch, [userName]);
            
          
          try {
          const results = await db.query(sqlIdQuery, (err, results) => {
              if (err) {
                return console.log("Error during the query");
              }
              const payload = {
                userId:result[0].userId,
                username:userName
              }
              const jwtSecret = process.env.JWT_SECRET;
              const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})
              
              console.log(
                "-------> Login Sucesfully, your user id is:",
                JSON.stringify(results[0].userId)
                
              );
              
              res.json({tokenMessage: token ,idMessage: results[0].userId });
           
      
            });
          } catch (error) {
            console.log("Error on the query", error);
          }
        } else {
          console.log("-------> Password Incorrect");
          res.send("Password Incorrect");
        
        }
      }
    });
  });
});
app.post("/createpost", async (req, res) => {
  const postTitle = req.body.title;
  const postText = req.body.content;
  db.getConnection(async (err, connection) => {
    const sqlInsert = "INSERT INTO post VALUES (0,?,?)";
    const insert_query = mysql.format(sqlInsert, [postTitle, postText]);

    if (postText.length === 0) {
      console.log("-------> You need to add some content to the post");
    }

    if (postTitle.length === 0) {
      console.log("-------> You need to add a title");
    }
    if (postText.length && postTitle.length >= 1) {
      await connection.query(insert_query, (err, result) => {
        connection.release();
        if (err) throw err;
        console.log(result.insertId);
        console.log("Your post was created!!!");
      });
    }
  });
});

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM userDB.post ", (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results);
  });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
