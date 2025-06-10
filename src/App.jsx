
import LandingPage from "./Screen/Landing.jsx"

// import SecondScreen from "./Screen/secondScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTwoNumberComponent from "./Components/Javasc.jsx"
import Marksheet  from "./Components/marksheet.jsx"
import ProductPage from './Screen/ProductPage';
import CartPage from './Screen/CartPage';
import HelpPage from './Screen/helpPage'
import DetailsPage from './Screen/productDetailsPage.jsx'
import Firstspage from './PropsDriling/first.jsx'
import Aboutus from  './Screen/Aboutus.jsx'
import SignIn from './Screen/SignIn';
import toast, { Toaster } from 'react-hot-toast';

function App() {
return (
  
   <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/secondscreen" element={<SecondScreen />} /> */}
        <Route path="/calculator" element={<AddTwoNumberComponent />} />
        <Route path="/markshet" element={<Marksheet />} />
        <Route path='/product'  element={<ProductPage/>}/>
        <Route path='/cartpage'  element={<CartPage/>}/>
        <Route path='/helpPage'  element={<HelpPage/>}/>
        <Route path='/detailspage' element={<DetailsPage/>}/>
        <Route path='/firstspage' element={<Firstspage/>}/>
         <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
     <Toaster />
  </>

)
}

export default App
