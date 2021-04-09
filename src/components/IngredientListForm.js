import React, {useState, Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const IngredientListForm = () => {
    const [inputFields, setInputFields] = useState([
        {ingredient: ''}
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ingredient: ''});
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].ingredient = event.target.value;
        setInputFields(values);
    };


    return (
        <Form.Group>
            {inputFields.map((inputField, index) => (
                <Fragment key={`${inputField}~${index}`}>
                    <Form.Label>Ingredient {index+1}</Form.Label>
                    <Form.Control
                        as='input'
                        className="form-control"
                        id={"ingredient" + (index+1)}
                        name={"ingredient" + (index+1)}
                        value={inputField.ingredient}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <Button
                        variant="secondary"
                        onClick={() => handleRemoveFields(index)}
                    >
                        -
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleAddFields(index)}
                    >
                        +
                    </Button>
                </Fragment>
            ))}
        </Form.Group>
    )
}

export default IngredientListForm