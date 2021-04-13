import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {recipeData} from './SavedRecipes'

function Meal(props) {
    const [item,setItem] = useState('');
    const handleSelect=(e)=>{
        setItem(e);
    }

    const recipeList = recipeData.map(recipe => {
        return(
            <Dropdown.Item onSelect={handleSelect} key={recipe.recipeName} eventKey={recipe.recipeName}>{recipe.recipeName}</Dropdown.Item>
        )
    })

    return (
        <div className={props.name}>
            <a href={(document.getElementById(item) !== 'undefined' && document.getElementById(item) !== null) ? recipeData[recipeData.findIndex(p => p.recipeName === item)].recipeSource : `default`} id={item}>{item}</a>
            <DropdownButton variant={props.variant} title={"Add "+props.name+" item"}>
                {recipeList}
            </DropdownButton>
        </div>
    )
}

export default Meal