import { memo } from "react";
import TabButton from "./TabButton";

function Tabs({ tabs, activeTab, onTabClick }) {

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {tabs.map((tab, index) => (
                <TabButton
                    key={index}
                    label={tab}
                    isActive={activeTab === index}
                    onClick={() => onTabClick(index)}
                />
            ))}
        </div>
    );
}

export default memo(Tabs);
