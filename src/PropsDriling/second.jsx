import ThirdComponent from "../PropsDriling/third";

export default function SecondComponent({propsdata})
{
    

    return(<div>
        second component
         
        <ThirdComponent propsdata={propsdata}/>
    </div>)
}