import { React, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { getChampionsList } from "../../api/getChampionsList";
import { leanDriversStandingsList } from "./championsList.utils";
import DataTable from "./table";
import "./championsList.scss";
import { green } from "@mui/material/colors";
import DataNotFound from "../dataNotFound/dataNotFound";

const ChampionsList = () => {
  const [championsList, setChampionsList] = useState([]);
  const [isLoading, setLoading] = useState(true);


  async function getList(){
    const data = await getChampionsList();
    let driverStandingsData = data.MRData.StandingsTable.StandingsLists;

    if(driverStandingsData.length === 0){
      setLoading(false);
      return (
        <DataNotFound/>
      )
    }
    setChampionsList(leanDriversStandingsList(driverStandingsData));
    setLoading(false);
  }


  useEffect(() => {

    getList();

  }, []);


  if (isLoading)
    return (
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <ClipLoader color={green} loading={isLoading} size={100} />
      </div>
    );

  return (
    <div>
      <DataTable ListData={championsList} />
    </div>
  );
};

export default ChampionsList;
