const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var session = require("express-session");

require("dotenv").config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

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
app.use(
  cors({
    origin: ["http://localhost:5173"], // this is necessary because tells to the cors what is the orgin of the request
    credentials: true,
  })
);

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
app.post("/login", (req, res) => {
  const user = req.body.name;
  const userPassword = req.body.password;

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "SELECT * FROM userTable WHERE user = ? AND password = ?";
    const search_query = mysql.format(sqlSearch, [user, userPassword]);
    userLogged = false;
    await connection.query(search_query, async (err, result) => {
      connection.release();
      if (err) throw err;

      if (result.length == 0) {
        console.log("-------> User does not exist");
        res.sendStatus(404);
      } else {
        const password = result[0].password;

        if (user === user && userPassword === password) {
          console.log("-------> Login Sucesfully");
          res.send((userLogged = true));
        } else {
          console.log("-------> Password Incorrect");
          res.send("Password Incorrect");
          res.send((userLogged = false));
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

app.get('/posts', (req, res) => {
  
  db.query("SELECT * FROM userDB.post ", (err, results) => {
    if(err) throw err;
    res.json(results);
    console.log(results)
  });
});
  
const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
