
import LandingPage from "./Components/Landing.jsx"
import SecondScreen from "./screen/secondScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
return (
  
   <>
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/secondscreen" element={<SecondScreen />} />
      </Routes>
    </Router>
  </>
)
}

export default App
