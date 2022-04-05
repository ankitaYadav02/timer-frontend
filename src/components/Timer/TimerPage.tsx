import { RouteComponentProps } from "@reach/router";
import { Box, Typography } from "@mui/material";
import Logo from "components/Logo";
import { styled } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TimerDigit = styled(Typography)({
	fontSize: 48,
});

const TimerPage = (_props: RouteComponentProps) => {
	return (
		<Box>
			<Logo />
			<Box
				sx={{
					width: "fit-content",
					height: "fit-content",
					margin: "5% auto"
				}}
			>
				<Box sx={{ display: "flex"}}>
					<TimerDigit>00 :&nbsp;</TimerDigit>
					<TimerDigit>00 :&nbsp;</TimerDigit>
					<TimerDigit>00</TimerDigit>
				</Box>
				<Box sx={{ display: "flex", marginTop: '1rem'}}>
					<PlayArrowIcon sx={{ fontSize: 40, border: '1px solid black', margin: '0.25rem'}}/>
					<PauseIcon sx={{ fontSize: 40, border: '1px solid black', margin: '0.25rem' }}/>
					<RestartAltIcon sx={{ fontSize: 40, border: '1px solid black', margin: '0.25rem' }}/>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-around', border: '1px solid black',
    padding: '1rem', marginTop: '1rem' }}>
					<Box sx={{ display: 'flex'}}>
						<AccountCircleIcon sx={{ fontSize: 40, margin: '0.25rem'}}/>
						<Typography >user 1</Typography>
					</Box>
					<Box sx={{ display: 'flex'}}>
						<AccountCircleIcon sx={{ fontSize: 40, margin: '0.25rem'}}/>
						<Typography >user 1</Typography>
					</Box>
					<Box sx={{ display: 'flex'}}>
						<AccountCircleIcon sx={{ fontSize: 40, margin: '0.25rem'}}/>
						<Typography >user 1</Typography>
					</Box>
				</Box>
		</Box>
	);
};

export default TimerPage;
