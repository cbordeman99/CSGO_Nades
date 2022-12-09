import { flushSync } from "react-dom";
const fs = require("fs");

function getAllNades() {
  fs.readFile("db.json", (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data.toString()));
  });
}

function saveAllNades(allNades) {
  fs.writeFile("db.json", allNades, (err) => {
    if (err) console.log(err.message);
    else {
      console.log("File written successfully\n");
    }
  });
}

export default { getAllNades, saveAllNades };
