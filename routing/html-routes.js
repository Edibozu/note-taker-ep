const path = require("path");

// Used to export the code from this page to be used in server.js
module.exports = (app) => {
  
  // These two links will direct the user to either the home page or notes page.
  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
  app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "/../public/notes.html"));
  });
};
