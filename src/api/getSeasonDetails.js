import { base_url } from "../constants";

export const getSeasonDetails = async (season) =>{
    return fetch (base_url + `api/f1/${season}/results/1.json`)
    .then(res=>res.json());
}