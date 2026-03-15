const jsonConverter = require("../../conversion");
const fs = require("fs");

const matchesData = jsonConverter("../data/matches.csv");

function matchesWonPerTeamPerYear() {
  const matchesWonPerTeamPerYear = matchesData.reduce((acc, curr) => {
    if (acc[curr.season]) {
      if (acc[curr.season][curr.winner]) {
        acc[curr.season][curr.winner] += 1;
      }
    } else {
      acc[curr.season] = {};
      acc[curr.season][curr.winner] = 1;
    }

    return acc;
  }, {});

  return matchesWonPerTeamPerYear;
}

const result = matchesWonPerTeamPerYear();

fs.writeFileSync(
  "../public/output/matchesWonPerTeamPerYear.json",
  JSON.stringify(result, null, 2),
  "utf-8",
  (error) => {
    if (error) {
      console.error("Error writing file:", error);
    }
  },
);
