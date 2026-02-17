import FruitItem from "./FruitItem"

export default function FruitsList({fruits}){
    if(fruits.length === 0){
        return <p>No Results found </p>
    }
    return(
        <div>
            {
                fruits.map((fruit,index)=>(
                    <FruitItem key={index} fruit={fruit}/>
                ))
            }
        </div>
    )
}