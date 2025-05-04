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
  const [reserror,setResError] = useState({})  //already kuch data dala hai 
  
  console.log("we want to check error object what material can be stored in that:",reserror)

  const handleError = (error, input,message)=>{
    setResError(prevState=>({...prevState,[input]:{'error':error,'message':message}}))  //spread operator
     }

  const submitf=()=>{
    var validation = true

   if(firstname.trim().length==0 ){        //     <></>   0  true
    handleError(true,'firstname','Pls Input First Name')
    validation = false
    }
    if(!lastname.trim().length>0){
      handleError(true,'lastname','Pls Input last Name')
      validation = false
    }
    if(!mobileno?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'mobile','Pls Input mobile no')
      validation = false
    }
    if(!englishmarks?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'englishmarks','Pls Input english marks')
      validation = false
    }
    if(!mathhmarks?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'mathhmarks','Pls Input  mathmarks')
      validation = false
    }
    if(!sciencehmarks?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'sciencehmarks','Pls Input  sciencemarks')
      validation = false
    }
    if(!ssciencehmarks?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'ssciencehmarks','Pls Input sscience marks')
      validation = false
    }
    if(!hindihmarks?.trim()?.length>0 )  // ?    optional chaining
    {
      handleError(true,'hindihmarks','Pls Input  hindimarks')
      validation = false
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

        if(validation)
        {
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
        
        
  }
  
  
  return (
    <>{status==false?
    <div  style={{ width: "100%", height: "120vh",marginTop:"10px" ,  marginLeft:"400px", alignItems: "center" }}>
    
    <div className='box-marksheet' style={{ width: "45%" ,height: "90%", backgroundColor: "#e4e9f2", borderRadius: "10px" }}>
    <h2 style={{ color:"white" ,marginLeft:"190px",marginTop:"10px"}}>Registeration Form</h2>
      <div style={{margin: "7px",  justifyContent: "space-evenly" }}>
       
       
       <div style={{ color:"white", marginLeft:"50px"}}>
       FirstName  :
         <input type="text"  placeholder="Enter Ur First Name" style={{ width: "250px" , marginLeft:"30px",borderRadius:"40px",height:"20px", marginTop:"20px"}} onFocus={()=>handleError(false , "firstname","")}  onChange={(e)=>setFirstname(e.target.value)}/>
         {reserror?.firstname?.error?<div style={{color:"red"}}>{reserror?.firstname?.message}</div>:""}
      </div><br/>

      <div  style={{ color:"white", marginLeft:"50px"}}>
        LastName  :
        <input type="text" placeholder="Enter Ur Last Name" style={{ width: "250px" , marginLeft:"30px",borderRadius:"40px",height:"20px"}} onFocus={()=>handleError(false , "lastname","")} onChange={(e)=>setLastName(e.target.value)}/>
        {reserror?.lastname?.error?<div style={{color:"red"}}>{reserror?.lastname?.message}</div>:""}
        </div><br/>
        

      <div style={{ color:"white", marginLeft:"50px"}}>
        Mobile no :
        <input type="text" placeholder="Enter Ur Mobile No." maxLength={10} style={{ width: "250px" , marginLeft:"30px",borderRadius:"40px",height:"20px"}} onFocus={()=>handleError(false , "mobile","")} onChange={(e)=>setMobileNo(e.target.value)}/>
        {reserror?.mobile?.error?<div style={{color:"red"}}>{reserror?.mobile?.message}</div>:""}
        </div>
      </div>
      
      <div style={{ marginLeft: "55px", marginTop: "20px",marginRight:"38px" ,display:'flex',justifyContent:"space-between"}}>
        <div style={{ color:"white"}}>
       <span style={{ color:"white"}}>Gender :</span>
        Male<input  type="radio" name="gender" value="Male" onClick={(e)=>setGender(e.target.value)}/>Female<input name="gender" type="radio" value="Female" onClick={(e)=>setGender(e.target.value)}/>
        </div>
        
        <select style={{ marginRight: "75px",borderRadius:"50px"}} onChange={(e)=>setSgp(e.target.value)}>
          <option>-Select-</option>
          <option>Percentage</option>
          <option>Grade</option>
        </select>
      </div>
      <div style={{ marginTop:"40px" }}>
      <div style={{ color:"white", marginLeft:"50px"}}>
        English Marks :
        <input type="text" placeholder="Enter English Marks" style={{ width: "250px" ,marginLeft:"30px",borderRadius:"40px",height:"20px"}} maxLength={2} onFocus={()=>handleError(false , "englishmarks","")} onChange={(e)=>setEnglishMarks(e.target.value)}/>
        {reserror?.englishmarks?.error?<div style={{color:"red"}}>{reserror?.englishmarks?.message}</div>:""}
        </div>
        <div style={{ color:"white", marginLeft:"50px"}}>
          Math Marks :
      <input type="text" placeholder="Enter Math Marks" style={{ width: "250px" ,marginTop:"10px",marginLeft:"40px",borderRadius:"40px",height:"20px"}} max={2} onFocus={()=>handleError(false , "mathhmarks","")}    onChange={(e)=>setMathMarks(e.target.value)}/>
      {reserror?.mathhmarks?.error?<div style={{color:"red"}}>{reserror?.mathhmarks?.message}</div>:""}
      </div>
      <div style={{ color:"white", marginLeft:"50px"}}>
        Science Marks :
      <input type="text" placeholder="Enter Science Marks" maxLength={2} style={{ width: "250px" ,marginTop:"10px",marginLeft:"27px",borderRadius:"40px",height:"20px"}} onFocus={()=>handleError(false , "sciencehmarks","")} onChange={(e)=>setScienceMarks(e.target.value)}/>
      {reserror?.sciencehmarks?.error?<div style={{color:"red"}}>{reserror?.sciencehmarks?.message}</div>:""}
      </div>
      <div style={{ color:"white", marginLeft:"50px"}}>
        Ssc Marks :
      <input type="text" placeholder="Enter Socal Science Marks" style={{ width: "250px" ,marginTop:"10px",marginLeft:"50px",borderRadius:"40px",height:"20px"}}  onFocus={()=>handleError(false , "ssciencehmarks","")} onChange={(e)=>setSscienceMarks(e.target.value)}/>
      {reserror?.ssciencehmarks?.error?<div style={{color:"red"}}>{reserror?.ssciencehmarks?.message}</div>:""}
      </div>
      <div style={{ color:"white", marginLeft:"50px"}}>
        Hindi marks :
      <input type="text" placeholder="Enter Hindi Marks" style={{ width: "250px" ,marginTop:"10px",marginLeft:"40px",borderRadius:"40px",height:"20px"}} onFocus={()=>handleError(false , "hindihmarks","")} onChange={(e)=>setHindiMarks(e.target.value)}/>
      {reserror?.hindihmarks?.error?<div style={{color:"red"}}>{reserror?.hindihmarks?.message}</div>:""}
      </div>

      <div style={{marginTop:"50px",paddingLeft:"100px",marginLeft:"160px"}}>
      <input type="button" value="submit" onClick={()=>submitf()} style={{height:"30px",borderRadius:"60px",width:"80px",backgroundColor:"green",border:"none",color:"white"}}/>
      </div>
      </div>
    </div>
  </div>
    :
    <div style={{width:"40%",height:"96vh",background:"#8893a6" ,justifyContent:"center",marginLeft:"370px",borderRadius:"30px"}}>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Name :<div style={{backgroundColor:"white",marginLeft:"100px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{firstname+" "+lastname}</div></div><br/>
    
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Mobile No:<div style={{backgroundColor:"white",marginLeft:"77px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{mobileno}</div></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Gender:< div style={{backgroundColor:"white",marginLeft:"100px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{gender}</div></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Prefer:<div style={{backgroundColor:"white",marginLeft:"110px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{sgp}</div><br/></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>English Marks:<div style={{backgroundColor:"white",marginLeft:"52px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{englishmarks}</div></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Math Marks:<div style={{backgroundColor:"white",marginLeft:"70px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{mathhmarks}</div></div><br/>

    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Science Marks:<div style={{backgroundColor:"white",marginLeft:"60px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{sciencehmarks}</div></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Social Science Marks:<div style={{backgroundColor:"white",marginLeft:"10px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{ssciencehmarks}</div></div><br/>
    <div style={{marginLeft:"150px",color:"white",display:"flex"}}>Hindi Marks:<div style={{backgroundColor:"white",marginLeft:"70px",color:"black",width:"150px",height:"20px",borderRadius:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>{hindihmarks}</div></div><br/>

     {sgp=="Grade"?<div style={{marginTop:"50px",marginLeft:"150px",color:"white",display:"flex"}}>Grade System:{gradesystem}</div>
     :
     <div style={{marginTop:"50px",marginLeft:"150px",color:"white",display:"flex"}}>Percentage:{(parseInt(englishmarks)+parseInt(mathhmarks)+parseInt(sciencehmarks)+parseInt(ssciencehmarks)+parseInt(hindihmarks))/5}</div>
}

  <div style={{marginTop:"50px",marginLeft:"190px",color:"white",display:"flex"}}><input  style={{backgroundColor:"blue",color:"white",width:"200px",borderRadius:"30px",height:"30px"}} type="button" value="Marksheet Form" onClick={()=>setStatus(false)}/></div>
  </div>
    }
     
   </>
  )
}