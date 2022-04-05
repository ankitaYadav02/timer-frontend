import { RouteComponentProps } from "@reach/router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TimerPage from "./DurationInput";
import Logo from "components/Logo";
import useTimerPage from "./useTimerPage";

const TimerCard = () => {
	const { duration, onChangeDuration, createTimer } = useTimerPage();

	return (
		<Box
			sx={{
				width: "fit-content",
				height: "fit-content",
				margin: "5% auto",
			}}
		>
			<Card variant="outlined" sx={{ height: "inherit", padding: "15%" }}>
				<CardContent>
					<TimerPage duration={duration} onChangeDuration={onChangeDuration} />
				</CardContent>
				<CardActions sx={{ justifyContent: "center" }}>
					<Button
						size="small"
						variant="contained"
						color="primary"
						onClick={createTimer}
					>
						CREATE TIMER
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

const Home = (props: RouteComponentProps) => {
	return (
		<Box>
			<Logo />
			<TimerCard />
		</Box>
	);
};

export default Home;
