import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./providers/ThemeContext";
import { Route, Routes } from "react-router";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/test"
            element={
              <div>
                <p>Test</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
