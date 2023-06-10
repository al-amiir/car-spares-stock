import { useState } from "react";
import "./App.css";
import Theme from "./theme/Theme";
import Home from "./views/Home";
import Header from "./components/header/Header";

function App() {
  const [direction, setDirection] = useState("ltr");
  return (
    <Theme direction={direction}>
      <Header direction={direction} setDirection={setDirection} />
      <Home />
    </Theme>
  );
}

export default App;
