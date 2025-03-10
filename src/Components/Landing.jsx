import Nav from "../Components/Navbar.jsx"
// import Nav from "./Components/Navbar.jsx"
import Responsive from "../Components/slider.jsx"
import SwipeToSlide from "../Components/sliders2.jsx"
import Slider2 from "../Components/reataurant.jsx"
import BestPlace from "../Components/place.jsx"
import FooterSection  from "../Components/footer.jsx"
import '../Components/Landing.css'
export default function LandingPage(){
return (
   <>
   <div>
  <Nav/>
  <Responsive/>
  <hr/>
 <div className="sliders2-heading">
 <h2>Top restaurant chains in Sasaram</h2>
 <SwipeToSlide />
 
 </div> 
 <hr/>
    <div>
         <div className="slider2-main-app-content">  
             <h2>Restaurants with online food delivery in Sasaram</h2>
             <div className='restaurant-information'>
            <div><p>filter</p></div>
            <div><p>Rating 4.0</p></div>
            <div><p>Sort By</p></div>
            <div><p>Pure veg</p></div>
            <div><p>offers</p></div>
            <div><p>Rs 300 to 600</p></div>
            <div><p> Less  Rs 300</p></div>
            </div>
        </div>
          <div className="slider2-main-app">
              <Slider2  restaurant="Haveli Restaurant"  information="North Indian, South Indian, ChineseGrand Trunk Road" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5fe4444a065b60c4fe39ef975222c12b"/>
              <Slider2   restaurant="La Pino'z Pizza"   information="Pizzas, Pastas, Italian, Desserts, Beverages Sasaram" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/615950282510979d66ee2399b320770f"/>
              <Slider2   restaurant="Maurya Royal"      information="North Indian, Chinese, South India Rauza Road" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dbf749b863c540b56738db880a6c733"/>
              <Slider2   restaurant="Winni Cakes And More" information="Desserts, Sweets MAHAVIR ASTHAN" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/abyhfbk9jbtandvxdkvz"/>
          </div>
          <div className="slider2-main-app">
              <Slider2  restaurant="Haveli Restaurant"  information="North Indian, South Indian, ChineseGrand Trunk Road" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4407f82019825c080e47d36e991ab179"/>
              <Slider2   restaurant="La Pino'z Pizza"   information="Pizzas, Pastas, Italian, Desserts, Beverages Sasaram" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/5/b6289d25-3fe2-4400-88b5-d3be3248d0f4_1021479.jpg"/>
              <Slider2   restaurant="Maurya Royal"      information="North Indian, Chinese, South India Rauza Road" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/23/1cafd466-bc15-4b49-a57b-699a4c9766fc_997095.jpg"/>
              <Slider2   restaurant="Winni Cakes And More" information="Desserts, Sweets MAHAVIR ASTHAN" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/16/d6e22a4b-e9b6-4445-a80f-f2bd57de1fe4_942539.JPG"/> 
          </div>
 </div>
 
 <div className="places-container">
 <hr/>
  <h2>Best Places to Eat Across Cities</h2>
  <div className="places-container-section">
  <BestPlace name="Best Restaurants in Bangalore"/>
  <BestPlace name="Best Restaurants in Pune"  />
  <BestPlace name="Best Restaurants in Mumbai"/>
  <BestPlace name="Best Restaurants in Delhi"/>
  </div>
  <div className="places-container-section">
  <BestPlace name="Best Restaurants in Hyderabad"/>
  <BestPlace name="Best Restaurants in Bangalore"/>
  <BestPlace name="Best Restaurants in Delhi"/>
  <BestPlace name="Best Restaurants in Delhi"/>
  </div>
  <div className="places-container-section">
  <BestPlace name="Best Restaurants in Pune"/>
  <BestPlace name="Best Restaurants in Pune"/>
  <BestPlace name="Best Restaurants in Pune"/>
  <BestPlace name="Best Restaurants in Pune"/>
  </div>
 </div> 
<hr/>
 <div>
  <FooterSection/>
 </div>
 
</div>
   </>
)
}