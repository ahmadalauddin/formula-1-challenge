import { base_url, offset, limit } from "../constants";

export const getChampionsList = async () =>
  fetch(
    base_url + `api/f1/driverstandings/1.json?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
