import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss'

function Task({no, name, done, setData}) {
    const toggleTask = (no) => {
        setData(prevData => {
            prevData.map(cassssssssssrd => ({
                ...card,
                tasks: card.tasks.map(task =>
                    task.no === no ? { ...task, done: !task.done } : task
                )
            }))
            console.log(prevData);
        }
        );

    };

    return (
        <li className={_Task}>
            <input type='checkbox' checked={done} onChange={toggleTask} />
            {name}
            <a href='#' className={Task_Remove}></a>
        </li>
    );
}

export default Task;