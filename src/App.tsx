import { useEffect, useState } from "react";
import "./css/styles.css";
import HomePage from "./pages/HomePage";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return <HomePage />;
}

export default App;
