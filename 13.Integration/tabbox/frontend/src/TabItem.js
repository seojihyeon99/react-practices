import React from 'react';
import {Tab_Item, Active} from './assets/scss/TabItem.scss';

function TabItem({name, active}) {
    return (
        <li className={`${Tab_Item} ${active ? Active : ""}`}>
            {name}
        </li>
    );
}

export default TabItem;