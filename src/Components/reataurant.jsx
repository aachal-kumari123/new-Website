import '../Components/restaurant.css'
// import { FcRating } from "react-icons/fc";
export default function Slider2({restaurant,information,image}){
    return <div className='slider2-parent-box'>

       
      
           <div className='slider2-image'>
            <img src={image}/>
            </div>
           
            <div className='slider2-content'>
                <h3>{restaurant}</h3>
                <h4><img src="https://th.bing.com/th?q=Green+Star+Rating+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>4.1 • 70-75 mins</h4>
                <p>{information}</p>
            </div>
           </div>;
}
