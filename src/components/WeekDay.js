import React from 'react';
import DropDownRecipes from './DropDownRecipes'


function WeekDay(props) {
        

    return (
        <div className="weekday">
            <h3>{props.name}</h3>
            <div className="breakfast">
                <p id="breakfastItem">Breakfast item</p>
                <DropDownRecipes title="Add breakfast item" id="breakfastDropdown"/>
            </div>
            <div className="lunch">
                <p id="lunchItem">Lunch item</p>
                <DropDownRecipes title="Add lunch item" id="lunchDropdown" variant='info' />
            </div>
            <div className="dinner">
                <p id="dinnerItem">Dinner item</p>
                <DropDownRecipes title="Add dinner item" id="dinnerDropdown" variant='warning'/>
            </div>
        </div>
    )
}

export default WeekDay