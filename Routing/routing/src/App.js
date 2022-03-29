import "./App.css";
import Home from "./components/Home";
import Text from "./components/Text";
import Color from "./components/Color";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:text" element={<Text />} />
          <Route path="/:word/:textColor/:bgColor" element={<Color />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
