export function leanSeasonDetails(seasonDetails) {
  let parsedData = [];
  //parsing api data into a single object to make it easy for table to read using this util function
  seasonDetails.forEach((item) => {
    let seasonObj = {};

    seasonObj.raceName = item.raceName;
    seasonObj.date = item.date;
    seasonObj.round = item.round; 
    seasonObj.winner = item.Results[0].Driver.givenName + ' ' + item.Results[0].Driver.familyName;
    seasonObj.laps = item.Results[0].laps;
    seasonObj.points = item.Results[0].points;
    seasonObj.status = item.Results[0].status;
    seasonObj.grid = item.Results[0].grid;
    seasonObj.time = item.Results[0].Time.time;
    seasonObj.driverId = item.Results[0].Driver.driverId;
    parsedData.push(seasonObj);
  });

  return parsedData;
}
