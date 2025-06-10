import FourthComponent from "../PropsDriling/fourth";

export default function ThirdComponent({propsdata})
{
    
    return(<div>
        third component
        <FourthComponent propsdata={propsdata}/>
    </div>)
}