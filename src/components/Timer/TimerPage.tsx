import { RouteComponentProps } from "@reach/router";
import { Box, Typography } from "@mui/material";
import Logo from "components/Logo";
import { styled } from "@mui/material/styles";

const TimerDigit = styled(Typography)({
	fontSize: 48,
});

const TimerPage = (_props: RouteComponentProps) => {
	return (
		<Box>
			<Logo />
			<Box
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<TimerDigit>00 :&nbsp;</TimerDigit>
				<TimerDigit>00 :&nbsp;</TimerDigit>
				<TimerDigit>00</TimerDigit>
			</Box>
		</Box>
	);
};

export default TimerPage;
