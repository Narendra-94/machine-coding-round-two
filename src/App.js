import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Archive } from "./components/Archive/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
