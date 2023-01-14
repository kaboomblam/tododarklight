import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import ThemeProvider from "./providers/ThemeContext";
import { Route, Routes } from "react-router";
import SharedNav from "./components/SharedNav";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNav />}>
            <Route index element={<TodosPage />} />
          </Route>
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
