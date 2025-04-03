import { useState } from "react"



export default function AddTwoNumberComponent(){
    const [firstnumber, setFirstNumber] = useState()
    const [secondnumber, setSecondNumber] = useState()
    const [total , setSeetanker]  =useState()
    

    const addNumber = () =>{
        setSeetanker(parseInt(firstnumber) + parseInt(secondnumber))
    }

    const subtractNumber = () =>{
        setSeetanker(parseInt(firstnumber) - parseInt(secondnumber))
    }
    
    const multiplyNumber = () =>{
        setSeetanker(parseInt(firstnumber) * parseInt(secondnumber))
    }

    const divideNumber = () =>{
        setSeetanker(parseInt(firstnumber) / parseInt(secondnumber))
    }
    return(<div>
        <div style={{marginTop:"50px"}}>
        <input type="number" placeholder="Enter First Number" style={{marginRight:"20px", marginBottom:"70px"}} onChange={(e)=>setFirstNumber(e.target.value)}/>

        <input type="number" placeholder="Enter Second Number" style={{marginRight:"20px"}} onChange={(e)=>setSecondNumber(e.target.value)}/>



        <input type="button" value="ADD" style={{marginRight:"20px",}} onClick={()=>addNumber()}/>
        
        <input type="button" value="Subtract"  style={{marginRight:"20px"}} onClick={()=>subtractNumber()}/>

        <input type="button" value="multiply" style={{marginRight:"20px"}}  onClick={()=>multiplyNumber()}/>

        <input type="button" value="divide" style={{marginRight:"20px"}} onClick={()=>divideNumber()}/>



        <div>Add:{total} </div>
        </div>
    </div>)
}