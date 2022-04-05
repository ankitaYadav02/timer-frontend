import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Routes from "Routes";
import theme from "utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}

export default App;
