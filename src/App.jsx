
import LandingPage from "./Components/Landing.jsx"

import SecondScreen from "./Screen/secondScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTwoNumberComponent from "./Components/Javasc.jsx"
import Marksheet  from "./Components/marksheet.jsx"

function App() {
return (
  
   <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/secondscreen" element={<SecondScreen />} />
        <Route path="/calculator" element={<AddTwoNumberComponent />} />
        <Route path="/markshet" element={<Marksheet />} />
      </Routes>
    </Router>
  </>

)
}

export default App
