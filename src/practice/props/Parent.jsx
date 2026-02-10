import Child from "./Child";


export default function Parent(){
    const name = "Bhanu";
    const age = 21;
    
    return(
        <Child name={name} age={age}/>

    )

}