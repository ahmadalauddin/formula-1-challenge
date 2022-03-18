import { ChampionsList } from "../components";

const Home = () => {
  return (
    <div>
      <div className="pt-88">
        <h3>Drivers Standings</h3>
        <p className="text-secondary text-16">
          Please select a driver to show details
        </p>
        <div className="mt-4">
          <ChampionsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
