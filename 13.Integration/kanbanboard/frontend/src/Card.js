import React from 'react';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description, tasks}) {
    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${Card_Title_Open}`}>{title}</div>
            <div>
                {description}
                
                {/* TaskList */}
                <TaskList data={tasks}/>
            </div>            
        </div>
    );
}

export default Card;