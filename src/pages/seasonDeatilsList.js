import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { SeasonDetails } from "../components";

const SeasonDetailsList = () =>{
    let { year } = useParams();
  return (
    <div>
      <div className="d-flex flex-column pt-88">
        <div className="d-flex flex-row justify-content-between">
          
          <h3 className="ml-16">Season Details - {year}</h3>
          <Link type="button" className="btn btn-outline-secondary" to="/"><Home/></Link>
        </div>
        <div className="mt-4">
        <SeasonDetails className="mt-3" year={year}/></div>
      </div>
    </div>
  );
}

export default SeasonDetailsList;