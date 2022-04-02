import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Routes from "./Routes";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Clock App</h1>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
