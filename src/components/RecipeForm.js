import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import IngredientListForm from './IngredientListForm';
import Button from 'react-bootstrap/Button';

let initialFormData;
const RecipeForm = () => {
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control as='input' name='recipeName' onChange={handleChange}></Form.Control>
                <Form.Label>Recipe Source</Form.Label>
                <Form.Control as='input' name='recipeSource' onChange={handleChange}></Form.Control>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' name='recipeDescription' onChange={handleChange}></Form.Control>
                <Form.Group name='ingredientList' onChange={handleChange}>
                    <IngredientListForm />
                </Form.Group>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>Save recipe</Button>
        </Form>
    )
}

export default RecipeForm