import { useEffect, useState } from "react";
import "./css/styles.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  // document.body.classList.add() = isDark ? ".dark" : "";
  return (
    <div className="p-1">
      <button
        onClick={(c) => setIsDark(!isDark)}
        className="bg-blue-400 p-1 rounded-sm"
      >
        Toggle Scheme {isDark ? "Light" : "Dark"}
      </button>
      <h1 className="headline-large">Hello "TODO-dark-light" App</h1>
      <h1>Hello "TODO-dark-light" App (without Material Design Class)</h1>
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind has been added.
      </h1>
    </div>
  );
}

export default App;
