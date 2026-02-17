import { useEffect, useState } from "react";
import SearchInput from './SearchInput';
import FruitsList from "./FruitsList";

export default function FruitSearch(){
    const fruits = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Pineapple",
        "Grapes",
        "Watermelon",
        "Papaya"
    ]

    const [filteredFruits,setFilteredFruits] = useState(fruits)
    const [search,setSearch] = useState('')

    useEffect(()=>{

        const timer = setTimeout(()=>{
            const result = fruits.filter(fruit => 
                fruit.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredFruits(result)
        },300)
        return() => clearTimeout(timer)
    },[search])

    return(
        <div>
            <h1>Fruits</h1>
            <SearchInput search={search} setSearch={setSearch} />
            <FruitsList fruits={filteredFruits}/>
        </div>

    )
}