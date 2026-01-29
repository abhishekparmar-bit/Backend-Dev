const fs = require("fs");
const readline = require("readline");

const logFile = process.argv[2];

if (!logFile) {
  console.log("Usage: node logAnalyzer.js <logfile>");
  process.exit(1);
}

let stats = {
  INFO: 0,
  WARN: 0,
  ERROR: 0,
  TOTAL: 0
};

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  stats.TOTAL++;
  if (line.includes("INFO")) stats.INFO++;
  if (line.includes("WARN")) stats.WARN++;
  if (line.includes("ERROR")) stats.ERROR++;
});

rl.on("close", () => {
  console.log("Log Summary:");
  console.log(stats);
});
