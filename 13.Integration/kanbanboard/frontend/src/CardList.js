import React from 'react';
import {Card_List} from './assets/scss/CardList.scss'
import Card from './Card';

function CardList({status, data, setData}) {
    return (
        <div className={Card_List}>
            <h1>{status}</h1>

            {/* Card */}
            {
                data.map(item => <Card 
                                    key={item.no}
                                    no={item.no}
                                    title={item.title}
                                    description={item.description}
                                    tasks={item.tasks} 
                                    setData={setData}/>)
            }
        </div>
    );
}

export default CardList;