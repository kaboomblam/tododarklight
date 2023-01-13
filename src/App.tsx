import { useState } from "react";
// import "./css/theme.css";
import "./css/style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="headline-large">Hello "TODO-dark-light" App</h1>
      <h1>Hello "TODO-dark-light" App (without Material Design Class)</h1>
    </div>
  );
}

export default App;
