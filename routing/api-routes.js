const api = require("../public/assets/js/index.js");

// This is the api used for this application.
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        return res.sendFile(path.join(__dirname, "../db/db.json"));
    });
    
}