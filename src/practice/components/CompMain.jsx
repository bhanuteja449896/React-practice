import React from "react";
import Header from "./Header";
import Timer from "./Timer";
import FunCompDefProps from "./FunCompDefProps";
import CitySelector from "./CitySelector";
import ToggleButton from "./ToggleButton";
import ProfileCard from "./ProfileCard";


function CompMain(){

    return(
        <>

        <Timer/>
        <Header/>
        <FunCompDefProps/>
        <CitySelector/>
        <ToggleButton/>
        <ProfileCard/>

        </>
    )

}

export default CompMain;