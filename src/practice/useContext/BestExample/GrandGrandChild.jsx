import UserContext from "../Task1/UserContext";
import HouseNameContext from "./HouseNameContext";

export default function(){
    const HouseName = useContext(HouseNameContext);
    return(
        <div>
            <h1>House Name : {HouseName}</h1>
        </div>
    )
}