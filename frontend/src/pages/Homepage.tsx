import About from "../components/sections/Home/About";
import Home from "../components/sections/Home/Home";
import Locations from "../components/sections/Home/Locations";
import Plans from "../components/sections/Home/Plans";
import Services from "../components/sections/Home/Services";

function Homepage() {
  return (
    <div className="Homepage">
      <Home />
      <Locations />
      <Plans />
      <Services />
      <About />
    </div>
  );
}

export default Homepage;
