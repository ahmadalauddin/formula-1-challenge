//ideally this vairable should be a part of the env
//but for now it can be used from this file and later
// on converted into a env file to be deployed to different instances
import { currYear } from "../utils/getCurrentYear";

export const base_url = "http://ergast.com/";
export const startingYear = 2005;

//1950  the starting year of the F1 championship as per the API
export const currentYear = currYear;
export const offset = startingYear - 1950;
export const limit = currentYear - startingYear;
