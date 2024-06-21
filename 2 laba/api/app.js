require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  response.send('Hello World!Zheleznyak Maxim KIt-231');
});

app.get("/user", (request, response) => {
  response.send({ name: process.env.NAME, age: process.env.AGE, group: process.env.GROUP });
});

module.exports = app;