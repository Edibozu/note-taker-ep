const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { Server } = require("http");

// This is the api used for this application.
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/../db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
   
    // Readfile.
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
     
      // Parse file.
      // Take parsed file and set variable to be used in line 20.
      const postedNotes = JSON.parse(data);
      req.body.id = uuidv4();

      // Push array req.body
      postedNotes.push(req.body);

      // Stringify and overwrite with db.json, which will require fs.writefile.
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(postedNotes),
        "utf-8",
        (err) => {
          if (err) throw err;

          // send file back to the user via res.json().
          res.json(postedNotes);
        }
      );
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    
    // Readfile.
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;

      // Parse file.
      // Take parsed file and set variable to be used in line 49.
      const list = JSON.parse(data);
      postedNotes = list.filter((data) => {
        return data.id != req.params.id;
      });

       // Stringify and overwrite with db.json, which will require fs.writefile.
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(postedNotes),
        "utf-8",
        (err) => {
          if (err) throw err;
          
          // send file back to the user via res.json().
          res.json(postedNotes);
        }
      );
    });
  });
};