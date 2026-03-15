const csvtojson = require("papaparse");
const fs = require("fs");

function jsonConverter(filePath) {
  const csvFile = fs.readFileSync(filePath, "utf-8");

  const csvData = csvtojson.parse(csvFile, { header: true }).data;

  const jsonData = JSON.stringify(csvData, null, 2);

  const finalData = JSON.parse(jsonData);
  return finalData.slice(0, finalData.length - 1);
}

module.exports = jsonConverter;


