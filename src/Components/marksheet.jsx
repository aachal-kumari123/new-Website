import { useState } from "react"
import Swal from "sweetalert2"
import '../Components/marksheet.css'

export default function Marksheet() {
  const [firstname, setFirstname] = useState('')
  const [lastname,setLastName] = useState('')
  const [mobileno,setMobileNo] = useState()
  const [sgp,setSgp] = useState('')
  const [englishmarks,setEnglishMarks] = useState()
  const [mathhmarks,setMathMarks] = useState()
  const [sciencehmarks,setScienceMarks] = useState()
  const [ssciencehmarks,setSscienceMarks] = useState()
  const [hindihmarks,setHindiMarks] = useState()
  const [gradesystem,setGradeSystem]= useState('')
  // const [male,setMale] = useState('')
  // const [female,setFemale] =useState('')
  const [gender,setGender] = useState('')
  const [status,setStatus] =useState(false)
  // const [error,setError] = useState({status1:'',message1:""},{status2:'',message2:""},{status3:'',message3:""},{status4:'',message4:""},{status5:'',message5:""},{status6:'',message6:""},{status7:'',message7:""},{status7:'',message7:""})
  const[error,setError]=useState({})
  const handelError=(error, input,message)=>{
    setError(prevState=>({...prevState,[input]:{'error':error,'message':message}}))
  }


  const submitf=()=>{
  //  if(!firstname.trim().length>0 ){
  //    return setError({status1:"firstname",message1:"PLease fill First Name"})   //break kaam karega ye return aur aake ka function nhi chalega.
  //   }else if(!lastname.trim().length>0){
  //     return  setError({status2:"lastname",message2:"PLease Fill Last Name"})
  //   }else if(!mobileno?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status3:"mobileno",message3:"PLease Fill Mobile No."}) 
  //   }else if(!englishmarks?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status4:"englishmarks",message4:"PLease Fill MEnglish marks."}) 
  //   }else if(!mathhmarks?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status5:"mathhmarks",message5:"PLease Fill math marks."}) 
  //   }else if(!sciencehmarks?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status6:"sciencehmarks",message6:"PLease Fill science marks."}) 
  //   }else if(!ssciencehmarks?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status7:"ssciencehmarks",message7:"PLease Fill ssc marks."}) 
  //   }else if(!hindihmarks?.trim()?.length>0 )  // ?    optional chaining
  //   {
  //     return setError({status8:"hindihmarks",message8:"PLease Fill hindi marks."}) 
  //   }
 if(!firstname.trim().length>0){
  handelError(true,'firstname','Pls Input first name')
 }
 if(!lastname.trim().length>0){
  handelError(true,'lastname','Pls Input last name')
 }
 if(!mobileno?.trim()?.length>0){
  handelError(true,'mobileno','Pls Input number ')
 }

    var percentage = (parseInt(englishmarks)+parseInt(mathhmarks)+parseInt(sciencehmarks)+parseInt(ssciencehmarks)+parseInt(hindihmarks))/5

    if(percentage>=90 && percentage<=100)
    {
      setGradeSystem("A")
      
    }else if(percentage>=80 && percentage<90)
    {
      setGradeSystem("B")
    }else if(percentage>=70 && percentage<80)
      {
        setGradeSystem("c")
      }else if(percentage>=60 && percentage<70)
        {
          setGradeSystem("D")
        }else{
          setGradeSystem("sorry You are fail.")
        }
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes !"
        }).then((result) => {
          if(result.isConfirmed)
          {

            setStatus(true)
          }
        });
        
  }
  
  
  return (
    <>{status==false?
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#a1a7b3", margin: "0px important", display: 'flex', justifyContent: "center", alignItems: "center" }}>
    <div style={{ width: "60%", height: "70%", backgroundColor: "#e4e9f2", borderRadius: "10px" }}>
      <div style={{ margin: "7px", display: "flex", justifyContent: "space-evenly" }}>
       <span style={{color:"red"}}>*</span> 
       
       <div >
         <input type="text"  placeholder="Enter Ur First Name" style={{ width: "250px" }} onFocus={()=>setError({status1:"",message1:""})}  onChange={(e)=>setFirstname(e.target.value)}/>
         {error?.firstname?.error=="firstname"?<div style={{color:"red"}}>{error?.firstname?.message}</div>:""}
      </div>

      <div >
        <input type="text" placeholder="Enter Ur Last Name" style={{ width: "250px" }} onFocus={()=>setError({status2:"",message2:""})} onChange={(e)=>setLastName(e.target.value)}/>
        {error?.lastnamename?.error=="firstname"?<div style={{color:"red"}}>{error?.lastname?.message}</div>:""}
      </div>
        

      <div >
        <input type="text" placeholder="Enter Ur Mobile No." maxLength={10} style={{ width: "250px" }} onFocus={()=>setError({status3:"",message3:""})} onChange={(e)=>setMobileNo(e.target.value)}/>
        {error?.mobileno?.error=="firstname"?<div style={{color:"red"}}>{error?.mobileno?.message}</div>:""}
        </div>
      </div>
      
      <div style={{ marginLeft: "38px", marginTop: "20px",marginRight:"38px" ,display:'flex',justifyContent:"space-between"}}>
        <div>
        <div>Gender</div>
        Male<input  type="radio" name="gender" value="Male" onClick={(e)=>setGender(e.target.value)}/>Female<input name="gender" type="radio" value="Female" onClick={(e)=>setGender(e.target.value)}/>
        </div>
        
        <select onChange={(e)=>setSgp(e.target.value)}>
          <option>-Select-</option>
          <option>Percentage</option>
          <option>Grade</option>
        </select>
        

      </div>
          <div>
      <input type="text" placeholder="Enter English Marks" style={{ width: "250px" }} maxLength={2}  onFocus={()=>setError({status4:"",message4:""})} onChange={(e)=>setEnglishMarks(e.target.value)}/>
      {error.status4=="englishmarks"?<div style={{color:"red"}}>{error.message4}</div>:""}
         </div>
         <div>
      <input type="text" placeholder="Enter Math Marks" style={{ width: "250px" }} maxLength={2} onFocus={()=>setError({status4:"",message4:""})} onChange={(e)=>setMathMarks(e.target.value)}/>
      {error.status5=="mathhmarks"?<div style={{color:"red"}}>{error.message5}</div>:""}
        </div>
        <div>    
      <input type="text" placeholder="Enter Science Marks"  style={{ width: "250px" ,margin:"10px"}}  maxLength={2}onFocus={()=>setError({status4:"",message4:""})} onChange={(e)=>setScienceMarks(e.target.value)}/>
      {error.status6=="sciencehmarks"?<div style={{color:"red"}}>{error.message6}</div>:""}
        </div> 
        <div>
      <input type="text" placeholder="Enter Socal Science Marks" style={{ width: "250px" }} maxLength={2}  onFocus={()=>setError({status4:"",message4:""})} onChange={(e)=>setSscienceMarks(e.target.value)}/>
      {error.status7=="ssciencehmarks"?<div style={{color:"red"}}>{error.message7}</div>:""}
       </div> 
       <div>
       <input type="text" placeholder="Enter Hindi Marks" style={{ width: "250px" }}maxLength={2} onFocus={()=>setError({status4:"",message4:""})} onChange={(e)=>setHindiMarks(e.target.value)}/>
       {error.status8=="hindihmarks"?<div style={{color:"red"}}>{error.message8}</div>:""}
       </div>
      <div style={{marginTop:"50px",paddingLeft:"100px"}}>
      <input type="button" value="submit" onClick={()=>submitf()}/>
      </div>
    </div>
  </div>
    :
    <div style={{width:"100%",height:"100vh",background:"#8893a6"}}>
    <div>First Name :{firstname}</div>
    <div>Last Name:{lastname}</div>
    <div>Mobile No:{mobileno}</div>
    <div>Gender:{gender}</div>
    <div>Prefer:{sgp}</div>
    <div>English Marks:{englishmarks}</div>
    <div>Math Marks:{mathhmarks}</div>

    <div>Science Marks:{sciencehmarks}</div>
    <div>Social Science Marks:{ssciencehmarks}</div>
    <div>Hindi Marks:{hindihmarks}</div>

     {sgp=="Grade"?<div style={{marginTop:"50px"}}>Grade System:{gradesystem}</div>
     :
     <div style={{marginTop:"50px"}}>Percentage:{(parseInt(englishmarks)+parseInt(mathhmarks)+parseInt(sciencehmarks)+parseInt(ssciencehmarks)+parseInt(hindihmarks))/5}</div>
}

  <div style={{marginTop:"50px"}}><input type="button" value="Marksheet Form" onClick={()=>setStatus(false)}/></div>
  </div>
    }
     
   </>
  )
}