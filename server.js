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

require("./routing/html-routes.js")(app);

app.get("/api/notes", (req, res) => {
    return res.sendFile(path.join(__dirname, "/db/db.json"));
});

// When the user runs the program, they will be alerted that the server is listening to their request.
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});


