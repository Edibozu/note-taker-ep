const api = require("../public/assets/js/index.js");

// This is the api used for this application.
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        return res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    app.post("/api/notes", (req, res) => {
        fs.readFile("../db/db.json", "utf-8", (err, data) => {
            if(err){
                return res.send("Couldn't retrieve information!");
                db.push(req.body);
            }

        } );
        
    })
    
}