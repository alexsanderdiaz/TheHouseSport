import Home from "../components/sections/Home";
import Locations from "../components/sections/Locations";
import Plans from "../components/sections/Plans";

function Homepage() {
  return (
    <div className="Homepage">
      <Home />
      <Locations />
      <Plans />
    </div>
  );
}

export default Homepage;
