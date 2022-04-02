import { Button } from "@mui/material";
import { RouteComponentProps } from "@reach/router";

const Home = (props: RouteComponentProps) => {
  return <div>
      <Button color="primary" variant="contained">Click me</Button>
  </div>;
};

export default Home;
