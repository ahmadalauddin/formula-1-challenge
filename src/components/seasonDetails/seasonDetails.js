import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { green } from "@mui/material/colors";

import { getSeasonDetails } from "../../api/getSeasonDetails";
import { getSeasonChampion } from "../../api/getSeasonChampion";
import { leanSeasonDetails } from "./seasonDetails.utils";
import SeasonsTable from "./table";
import DataNotFound from "../dataNotFound/dataNotFound";
import { currentYear } from "../../constants";

const SeasonDetails = (props) => {
  const [seasonDetails, setSeasonDetails] = useState([]);
  const [seasonChampion, setSeasonChampion] = useState("");
  const [isLoading, setLoading] = useState(true);

  const { year } = props;
  const location = useLocation();
  const championsDriverId = location.state && location.state.driverId;

  useEffect(() => {
    async function getSeasonChampions() {
      const championDetails = await getSeasonChampion(year);
      let champion = championDetails.MRData.StandingsTable;
      if (champion.StandingsLists.length !== 0) {
        setSeasonChampion(
          champion.StandingsLists[0].DriverStandings[0].Driver.driverId
        );
      }
    }

    async function getSeasonDetail() {
      const seasonDetails = await getSeasonDetails(year);
      let details = seasonDetails.MRData.RaceTable.Races;

      if (details.length === 0) {
        setLoading(false);
        return <DataNotFound />;
      }

      setSeasonDetails(leanSeasonDetails(details));
      setLoading(false);
    }

    //checking if the champion id is passed in props
    //use that else if the year is changed in url and refreshed
    // call the api to fetch the id this reduces the api calls

    if (championsDriverId) {
      setSeasonChampion(championsDriverId);
    } else {
      getSeasonChampions();
    }

    getSeasonDetail();
  }, [championsDriverId, year]);

  //checking if the year is greater than the current year return an error message
  if (currentYear < year || year === "") {
    return <DataNotFound />;
  }

  if (isLoading)
    return (
      <div className="container d-flex justify-content-center align-items-center height-60">
        <ClipLoader color={green} loading={isLoading} size={100} />
      </div>
    );

  if (seasonDetails.length > 0) {
    return (
      <div>
        <SeasonsTable listData={seasonDetails} champion={seasonChampion} />
      </div>
    );
  } else {
    return <DataNotFound />;
  }
};

export default SeasonDetails;
