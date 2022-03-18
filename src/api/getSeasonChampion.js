import { base_url } from "../constants";

export const getSeasonChampion = async (season) =>
  fetch(base_url + `api/f1/${season}/driverStandings/1.json`).then((res) =>
    res.json()
  );
