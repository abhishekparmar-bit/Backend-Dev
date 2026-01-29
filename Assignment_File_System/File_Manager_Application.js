const fs = require("fs");
const path = require("path");

const [,, command, ...args] = process.argv;

switch (command) {
  case "read":
    fs.readFile(args[0], "utf8", (err, data) => {
      if (err) return console.log("Error:", err.message);
      console.log(data);
    });
    break;

  case "write":
    fs.writeFile(args[0], args[1], (err) => {
      if (err) return console.log("Error:", err.message);
      console.log("File written successfully");
    });
    break;

  case "copy":
    fs.copyFile(args[0], args[1], (err) => {
      if (err) return console.log("Error:", err.message);
      console.log("File copied successfully");
    });
    break;

  case "delete":
    fs.unlink(args[0], (err) => {
      if (err) return console.log("Error:", err.message);
      console.log("File deleted");
    });
    break;

  case "list":
    fs.readdir(args[0] || ".", (err, files) => {
      if (err) return console.log("Error:", err.message);
      files.forEach(file => console.log(file));
    });
    break;

  default:
    console.log(`
Commands:
  read <file>
  write <file> <content>
  copy <src> <dest>
  delete <file>
  list <directory>
    `);
}
