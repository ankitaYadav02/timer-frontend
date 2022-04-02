import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Timer from "./components/Timer";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Timer path="/timer" />
    </Router>
  );
};

export default Routes;
