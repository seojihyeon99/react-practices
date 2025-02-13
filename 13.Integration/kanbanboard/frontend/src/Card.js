import React, { useState } from 'react';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description, tasks}) {
    const [isOpen, setIsOpen] = useState(true);

    const openCard = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${isOpen ? Card_Title_Open : ""}`} 
                onClick={openCard}>
                {title}
            </div>
            {isOpen && (
                <div>
                    {description}
                    
                    {/* TaskList */}
                    <TaskList data={tasks}/>
                </div>     
            )}
        </div>
    );
}

export default Card;