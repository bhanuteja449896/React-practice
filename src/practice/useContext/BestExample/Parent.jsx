import HouseNameContext from './HouseNameContext'
import Child from './Child'


export default function Parent(){
    return(
        <HouseNameContext.Provider value={"Makkineni"}>
            <Child/>
        </HouseNameContext.Provider>
    )
}