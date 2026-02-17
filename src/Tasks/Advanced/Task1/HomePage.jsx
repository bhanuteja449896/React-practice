import { useState,useEffect,useCallback } from "react";
import TabButton from "./TabButton";
import Tabs from './Tabs'

export default function HomePage(){

    const tabs = ['Home','About','Contact'];

    const [activeTab,setActiveTab] = useState(0);

    useEffect(()=>{
        const savedTab = localStorage.getItem('activeTab');
        if(savedTab !== null){
            setActiveTab(Number(savedTab));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('activeTab',activeTab)
    },[activeTab]);

    const handleTabClick = useCallback=(index)=>{
        setActiveTab(index);
    }


    return(
        <div>
            <h1>Tab Switcher</h1>
            <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick}/>
            <TabButton activeTab={activeTab}/>
        </div>
    )
}