import React from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({data}) {
    return (
        <div className={Task_List}>
            <ul>
                {/* Task */}
                {
                    data.map(item => <Task 
                                        key={item.no}
                                        no={item.no}
                                        name={item.name}
                                        done={item.done}/>)
                }
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가' />
        </div>
    );
}

export default TaskList;