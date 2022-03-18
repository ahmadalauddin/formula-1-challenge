var nationalities = require("i18n-nationality");
nationalities.registerLocale(require("i18n-nationality/langs/en.json"));

export function leanDriversStandingsList(DriverStandings) {
  let parsedData = [];

  //parsing api data into a single object to make it easy for table to read using this util function
  DriverStandings.forEach((item) => {
    let driverObj = {};
    driverObj.name =
      item.DriverStandings[0].Driver.givenName +
      " " +
      item.DriverStandings[0].Driver.familyName;

    driverObj.nationality = item.DriverStandings[0].Driver.nationality;
    driverObj.countryCode = nationalities.getAlpha2Code(
      driverObj.nationality,
      "en"
    );
    driverObj.season = item.season;
    driverObj.round = item.round;

    driverObj.id = item.DriverStandings[0].Driver.driverId;
    driverObj.points = item.DriverStandings[0].points;
    driverObj.wins = item.DriverStandings[0].wins;

    parsedData.push(driverObj);
  });

  return parsedData;
}
