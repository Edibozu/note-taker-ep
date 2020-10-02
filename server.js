// Dependencies needed for this application.
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// The port that the server will be listening on.
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ edtended: true}));
app.use(express.json());
app.use(express.static("public"));

// The code from these 2 files is being inherited using the 'require' command.
require("./routing/html-routes.js")(app);
require("./routing/api-routes.js")(app);

// When the user runs the program, they will be alerted that the server is listening to their request.
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});


