import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {recipeData} from './SavedRecipes'

function Meal(props) {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);
    }

    const recipeList = recipeData.map(recipe => {
    
        return(
            <Dropdown.Item onSelect={handleSelect} key={recipe.recipeName} eventKey={recipe.recipeName}>{recipe.recipeName}</Dropdown.Item>
        )
    })

    return (
        <div className={props.name}>
            <p id={props.name+"Item"}>{value}</p>
            <DropdownButton variant={props.variant} title={"Add "+props.name+" item"}>
                {recipeList}
            </DropdownButton>
        </div>
    )
}

export default Meal