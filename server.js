const express = requre("express");
const fs= require("fs");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ edtended: true}));
app.use(express.json());

