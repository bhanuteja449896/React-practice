

import { useState, useEffect, useCallback } from "react";
import Tabs from "./Tabs";
import TabPanel from "./TabPanel";

export default function App() {

    const [activeTab, setActiveTab] = useState(0);

    // load saved tab
    useEffect(() => {
        const saved = localStorage.getItem("activeTab");
        if (saved !== null) {
            setActiveTab(Number(saved));
        }
    }, []);

    // save tab
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    // memoized handler
    const handleTabClick = useCallback((index) => {
        setActiveTab(index);
    }, []);

    const tabs = ["Home", "About", "Contact"];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Tab Switcher</h1>

            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={handleTabClick}
            />

            <TabPanel activeTab={activeTab} />

        </div>
    );
}
