import { useState } from "react";
// import "./css/m3/theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button>Toggle Scheme</button>
      <h1 className="headline-large">Hello "TODO-dark-light" App</h1>
      <h1>Hello "TODO-dark-light" App (without Material Design Class)</h1>
    </div>
  );
}

export default App;
