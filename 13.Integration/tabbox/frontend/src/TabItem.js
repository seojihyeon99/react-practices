import React, { useState } from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({no, name, active, selectTab}) {
    const [select, setSelect] = useState(active);
    
     return (
        <li 
            className={`${Tab_Item} ${select ? "active" : ""}`}
            onClick={() => {
                selectTab(no);
                // setSelect(!select);
            }}>
            {name}
        </li>
    );
}

export default TabItem;