const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//-------------------------------------------------------------------------------
// The code below collects the file names of the images in the "archive" folder.

// const fs = require("fs");

// let fileNames = [];

// fs.readdir("./archive", (err, files) => {
//   if (err) {
//     console.log("Error getting directory information.");
//   } else {
//     files.forEach((file) => {
//       fileNames.push(file);
//     });
//   }
// });
