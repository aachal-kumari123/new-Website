import Navbar from "../Components/Navbar";
import '../Components/About.css'
import React, { useState } from 'react';
import Footer from "../Components/footer";

export default function AboutUs(){

      const [visiblePara, setVisiblePara] = useState(null); 

    return  <div>
        <Navbar/>

        <div  className="about-first-container" style={{height:"630px",width:"100%"}}>
          <h1 style={{marginLeft:"600px",fontWeight:"bolder",paddingTop:"30px"}}>ABOUT US</h1>
          <div style={{height:"180px",width:"100%"}}><img style={{height:"220px",width:"180px",marginLeft:"1020px",marginTop:"-7px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1-282x300.webp"/> </div>
         <div style={{height:"140px",width:"100%"}}><img  style={{height:"240px",width:"200px",marginLeft:"180px",marginTop:"-65px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp"/> <img  style={{ marginLeft:"200px",marginTop:"-100px",height:"170px",width:"290px"}} src="../public/zaika-removebg-preview.png"/></div>
        <div style={{height:"190px",width:"100%"}}><img  style={{height:"200px",width:"200px",marginLeft:"750px",marginTop:"50px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/minis-1-283x300.webp"/> </div>
        </div>

        <div  className="about-second-container" style={{height:"600px",width:"100%",marginTop:"30px"}}>
             <div style={{marginLeft:"500px",fontSize:"50px",marginTop:"20px",fontWeight:"bolder"}} >Get to know us</div>
             <div style={{display:"flex"}}>
              <div style={{height:"500px",width:"30%",marginTop:"40px"}}>
                 <p style={{marginLeft:"110px",marginTop:"90px",fontSize:"20px",color:"gray"}} onClick={() => setVisiblePara('para1')}>Mission</p> 
                  <hr/>
                <p style={{marginLeft:"110px",marginTop:"90px",fontSize:"20px",color:"gray"}} onClick={() => setVisiblePara('para2')}>Vision</p>
                 <hr/>
                <p style={{marginLeft:"110px",marginTop:"90px",fontSize:"20px",color:"gray"}} onClick={() => setVisiblePara('para3')}>Values</p>
              </div>
              <div style={{height:"500px",width:"40%",marginTop:"1px"}}>
                <p style={{marginTop:"170px",marginLeft:"100px"}}>Our actions are strongly defined by the Swiggy values. Through
                   <br/>  downs, and everything in between; Swiggsters put these values into practice in their<br/>
                    everyday ways of working. Read on to get a taste of how
                    Swiggsters live and breathe<br/> these values and how it forms the backbone of our culture.
                    <br/>Swiggsters put these values into practice in their everyday ways of working.<br/> Read 
                    on to get a taste of how
                    Swiggsters live and breathe these values and how<br/> it forms the backbone of our culture.
                </p>
              </div>
              <div style={{height:"500px",width:"30%",marginTop:"40px"}}>
                <img style={{height:"350px",width:"300px",marginTop:"30px"}} src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Mission.png"/>
              </div>
            </div>
        </div>

       < div className="about-third-container"  style={{height:"600px",width:"100%",marginTop:"30px",display:"flex",gap:"100px",justifyContent:"center"}}>
      
        <div style={{height:"300px",width:"25%",marginTop:"30px",borderRadius:"50px", background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(48, 46, 46, 0.3))"}}><img  style={{ height:"300px",width:"340px",marginLeft:"-3px"}}src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-08.webp"/></div>
        <div style={{height:"300px",width:"25%",marginTop:"30px",borderRadius:"50px", background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(48, 46, 46, 0.3))"}}><img  style={{ height:"300px",width:"340px",marginLeft:"-3px"}}src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-08.webp"/></div>
        <div style={{height:"300px",width:"25%",marginTop:"30px",borderRadius:"50px", background:"linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(48, 46, 46, 0.3))"}}><img  style={{ height:"300px",width:"340px",marginLeft:"-3px"}}src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/management-member-08.webp"/></div>
       </div>
     <Footer/>
        </div>
}
