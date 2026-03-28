import Home from "../components/sections/Home";
import Locations from "../components/sections/Locations";
import Plans from "../components/sections/Plans";
import Services from "../components/sections/Services";

function Homepage() {
  return (
    <div className="Homepage">
      <Home />
      <Locations />
      <Plans />
      <Services />
    </div>
  );
}

export default Homepage;
