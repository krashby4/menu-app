import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {recipeData} from './SavedRecipes'

function DropDownRecipes(props) {
    const handleSelect=(e)=>{
        console.log(e);
    }

    const recipeList = recipeData.map(recipe => {
    
        return(
            <Dropdown.Item onSelect={handleSelect} key={recipe.recipeName} eventKey={recipe.recipeName}>{recipe.recipeName}</Dropdown.Item>
        )
    })
    
    

    return (
        <DropdownButton variant={props.variant} id={props.id} title={props.title}>
            {recipeList}
        </DropdownButton>
    )
}

export default DropDownRecipes