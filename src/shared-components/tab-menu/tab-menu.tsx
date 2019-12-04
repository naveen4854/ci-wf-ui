import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';

export interface TabMenuProps {
    tabs: any[],
    tabChange: Function,
    activeItem: any
}

const TabMenuComponent: React.FC<TabMenuProps> = (props) => {
    const [activeItem, setActiveItem] = useState(props.activeItem)
    const setActive = (e: any) => {
        setActiveItem(e.value);
        props.tabChange(e.value);
    }
    console.log(props.activeItem, 'test active')
    return <div className="content-section implementation">
        <TabMenu model={props.tabs} activeItem={props.activeItem} onTabChange={setActive} />
        {/* <h1>{activeItem.label}</h1> */}
    </div>
}

export default TabMenuComponent;