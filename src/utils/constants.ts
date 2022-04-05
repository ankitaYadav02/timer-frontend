import { duration } from "components/Home/DurationInput";

export const convertDurationToSeconds = (duration: duration) => {
	return duration.hour * 60 * 60 + duration.minute * 60 + duration.second;
};
