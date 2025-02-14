import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss'
import CardList from './CardList';

import srcData from './assets/json/data';

const getDataByStatus = (data, status) => {
    console.log(data);
    return data.filter(item => item.status === status);
}

function KanbanBoard() {
    const [data, setData] = useState(srcData);

    return (
        <div className={'Kanban_Board'}>
            {/* To Do CardList */}
            <CardList status="To Do" data={getDataByStatus(data, "ToDo")} setData={setData}/>

            {/* In Progress CardList */}
            <CardList status="Doing" data={getDataByStatus(data, "Doing")} setData={setData}/>
            
            {/* Done CardList */}
            <CardList status="Done" data={getDataByStatus(data, "Done")} setData={setData}/>
        </div>
    );
}

export default KanbanBoard;
