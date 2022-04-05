import { useState, ChangeEvent } from "react";
import { convertDurationToSeconds } from "utils/constants";

const useTimerPage = () => {
	const [duration, setDuration] = useState({
		hour: 0,
		minute: 0,
		second: 0,
	});

	const onChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = e;
		setDuration((prev) => ({ ...prev, [name]: value }));
	};

	const createTimer = () => {
		const d = convertDurationToSeconds(duration);
		console.log(d, "timer created");
	};

	return {
		duration,
		onChangeDuration,
		createTimer,
	};
};

export default useTimerPage;
