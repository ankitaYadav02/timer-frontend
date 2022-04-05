import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent } from "react";

const DurationInputField = styled(TextField)({
	fontSize: 48,
	label: "Outlined",
	variant: "outlined",
	padding: 10,
});

export type duration = {
	hour: number;
	minute: number;
	second: number;
};

type durationPage = {
	duration: duration;
	onChangeDuration: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DurationInput = (props: durationPage) => {
	const { duration, onChangeDuration } = props;

	return (
		<Box
			sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
		>
			<DurationInputField
				placeholder="Hour"
				type="number"
				name="hour"
				onChange={onChangeDuration}
				value={duration.hour}
			/>
			<DurationInputField
				placeholder="Minute"
				type="number"
				name="minute"
				onChange={onChangeDuration}
				value={duration.minute}
			/>
			<DurationInputField
				placeholder="Second"
				type="number"
				name="second"
				onChange={onChangeDuration}
				value={duration.second}
			/>
		</Box>
	);
};

export default DurationInput;
