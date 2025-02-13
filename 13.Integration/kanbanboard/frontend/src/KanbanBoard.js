import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss'
import CardList from './CardList';

import data from './assets/json/data';

const getDataByStatus = (status) => {
    return data.filter(item => item.status === status);
}

function KanbanBoard() {
    const [toDo, setToDo] = useState(getDataByStatus("ToDo"));
    const [inProgress, setInProgress] = useState(getDataByStatus("Doing"));
    const [done, setDone] = useState(getDataByStatus("Done"));

    return (
        <div className={'Kanban_Board'}>
            {/* To Do CardList */}
            <CardList status="To Do" data={toDo}/>

            {/* In Progress CardList */}
            <CardList status="Doing" data={inProgress}/>
            
            {/* Done CardList */}
            <CardList status="Done" data={done}/>
        </div>
    );
}

export default KanbanBoard;
