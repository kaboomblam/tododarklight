import { BrowserRouter, Navigate } from "react-router-dom";
import ThemeProvider from "./providers/ThemeContext";
import { Route, Routes } from "react-router";
import SharedNavPage from "./pages/SharedNavPage";
import TodosPage from "./pages/TodosPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ALL_PATHS } from "./utils/route_paths";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavPage />}>
            <Route index element={<TodosPage />} />
            <Route path={ALL_PATHS.notFound.path} element={<NotFoundPage />} />
          </Route>
          <Route
            path="/test"
            element={
              <div>
                <p>Test</p>
              </div>
            }
          />
          <Route path="*" element={<Navigate to={ALL_PATHS.notFound.path} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
