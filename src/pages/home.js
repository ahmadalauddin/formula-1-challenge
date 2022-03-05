import { ChampionsList } from "../components";
import { startingYear } from "../constants";

const Home = () =>{
  return (
    <div>
      <div className="pt-88">
        <h3>F1 Champions</h3>
        <p className="text-secondary text-16">Please select a driver to show details</p>
        <div className="mt-4">
          <ChampionsList />
        </div>
      </div>
    </div>
  );
}

export default Home;