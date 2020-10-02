const express = requre("express");
const fs= require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ edtended: true}));
app.use(express.json());
app.use(express.static("public"));



