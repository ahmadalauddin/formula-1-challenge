import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { green } from "@mui/material/colors";

import { getSeasonDetails } from "../../api/getSeasonDetails";
import { getSeasonChampion } from "../../api/getSeasonChampion";
import "./seasonDetails.scss";
import { leanSeasonDetails } from "./seasonDetails.utils";
import SeasonsTable from "./table";
import { currentYear } from "../../constants";
import DataNotFound from "../dataNotFound/dataNotFound";
import { ElevatorSharp } from "@mui/icons-material";

const SeasonDetails = (props) => {
  const [seasonDetails, setSeasonDetails] = useState([]);
  const [seasonChampion, setSeasonChampion] = useState("");
  const [isLoading, setLoading] = useState(true);

  const location = useLocation();
  const championsDriverId = location.state && location.state.driverId;

  async function getSeasonChampions() {
    const championDetails = await getSeasonChampion(props.year);
    let champion = championDetails.MRData.StandingsTable;
    if (champion.StandingsLists.length !== 0) {
      setSeasonChampion(
        champion.StandingsLists[0].DriverStandings[0].Driver.driverId
      );
    }
  }

  async function getSeasonDetail() {
    const seasonDetails = await getSeasonDetails(props.year);
    let details = seasonDetails.MRData.RaceTable.Races;

    if(details.length === 0){
      setLoading(false);
      return(<DataNotFound/>);
    }

    setSeasonDetails(leanSeasonDetails(details));
    setLoading(false);
  }

  useEffect(() => {
    //checking if the champion id is passed in props
    //use that else if the year is changed in url and refreshed
    // call the api to fetch the id this reduces the api calls

    if (championsDriverId) {
      setSeasonChampion(championsDriverId);
    } else {
      getSeasonChampions();
    }

    getSeasonDetail();
  }, []);

  //checking if the year is greater than the current year return an error message
  if (currentYear < props.year || props.year === "") {
    return <DataNotFound />;
  }

  if (isLoading)
    return (
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <ClipLoader color={green} loading={isLoading} size={100} />
      </div>
    );

    if(seasonDetails.length > 0){
      return (
        <div>
          <SeasonsTable ListData={seasonDetails} champion={seasonChampion} />
        </div>
      );
    }
    else{
      return(<DataNotFound/>)
    }
  
};

export default SeasonDetails;
