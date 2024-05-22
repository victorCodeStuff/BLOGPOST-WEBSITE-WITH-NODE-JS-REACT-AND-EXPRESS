## `BLOGPOST WEBSITE WITH NODE.JS, REACT.JS AND EXPRESS`



### This project enables users to:

* Create new users
* Write posts
* View posts
* Log in as a user

### Technologies used:


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
### How to Run This Project on Your Machine?
1. [Set up your mySQL DB](#setting-up-the-mysql-database)

2. Navigate to the `api` and `blogPostFrontEnd` directories.
3. In each directory, run the following commands:
* npm init
* npm install

Once the installations are complete, you're ready to run the project!

### Project Motivation and Development
Hi, I'm `Victor Hugo`, a web developer. 

I created this project to deepen my knowledge of Node.js. React.js and mySQL.

During its development, I relied on various blogs and the Stack Overflow community for assistance, so there might be a few minor mistakes. I hope you enjoy the project and find it as helpful as I did.

### API Endpoints:
###### POST /createUser 
```
POST /createUser - post request to query this new user to the DB
```
```
 {
    "name":"newUserExample",
    "password":"passForNewUser"
}
```
![alt text](/readmePhotos/createUser.avif)
#### POST /login
```
POST /login - does a post request to login
```
```
 {
    "name":"userrrr",
    "password":"passs"
}

```

#### POST /createpost
```
POST /createpost - post request to create a new post into the DB
```
```
 {
    "title":"newPost",
    "content":"content for the new post"
}
```
![alt text](/readmePhotos/createPost-1.avif)
Now you can see the Post:
![alt text](/readmePhotos/createPost-2.avif)

#### Setting up the mySQL Database 

```-- Create the Database and Use It
CREATE DATABASE userDB;
USE userDB;

-- Create the post Table
CREATE TABLE post (
    postId INT AUTO_INCREMENT PRIMARY KEY,
    postTitle VARCHAR(255) NOT NULL,
    postText TEXT NOT NULL
);

-- Create the userTable Table
CREATE TABLE userTable (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


```
