import { useState } from "react";
import SecondComponent from "../PropsDriling/second.jsx";



export default function FirstComponent()
{   
    const [data,setData] = useState(["MP","UP","HARIYANA","UTTAR PRADESH","MADHYA PRADESH"])
   
   return(<div>
        first component
        
        <SecondComponent  propsdata={data}/>
    </div>)
}