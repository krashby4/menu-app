import React from 'react';
import Meal from './Meal';

function WeekDay(props) {

    return (
        <div className="weekday">
            <h3>{props.name}</h3>
            <Meal 
                name="breakfast"
                variant="primary"
            />
            <Meal 
                name="lunch"
                variant="success"
            />
            <Meal 
                name="dinner"
                variant="warning"
            />
        </div>
    )
}

export default WeekDay