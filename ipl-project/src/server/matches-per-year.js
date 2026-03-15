
const jsonConverter = require("../../conversion");
const fs = require("fs");

const matchesData = jsonConverter("../data/matches.csv");

// console.log(matchesData[0]);

function matchesPerYear() {
  const matchesPerYear = matchesData.reduce((acc, curr) => {
    if (acc[curr.season]) {
      acc[curr.season] += 1;
    } else {
      acc[curr.season] = 1;
    }

    return acc;
  }, {});

  return matchesPerYear;
}

result = matchesPerYear();

fs.writeFileSync(
  "../public/output/matchesPerYear.json",
  JSON.stringify(result, null, 2),
  "utf-8",
  (error) => {
    if (error) {
      console.error("Error writing file:", error);
    }
  },
);
