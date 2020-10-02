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
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      const postedNotes = JSON.parse(data);
      req.body.id = uuidv4();
      postedNotes.push(req.body);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(postedNotes),
        "utf-8",
        (err) => {
          if (err) throw err;
          res.json(postedNotes);
        }
      );
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      const list = JSON.parse(data);
      postedNotes = list.filter((data) => {
        return data.id != req.params.id;
      });
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(postedNotes),
        "utf-8",
        (err) => {
          if (err) throw err;
          res.json(postedNotes);
        }
      );
    });
  });
};

// readfile
//parse file
//take parsed file and set variable to ve used in line 31
//push array req.body
//stringify and overwrite with db.json, which will require fs.writefile
//send file back to the user via res.json(JSON.parse)
