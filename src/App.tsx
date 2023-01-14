import "./css/styles.css";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./providers/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
