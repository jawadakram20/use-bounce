import "./App.css";
import Booking from "./pages/Booking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Placed from "./pages/Placed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Booking/>} />
        <Route path="/placed" element={<Placed/>} />
      </Routes>
    </Router>
  );
}

export default App;
