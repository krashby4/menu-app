import React, {useState, Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModalForm = () => {
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

    const handleSubmit = e => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    return (
        <>
            <Form.Group controlId="ingredientList">
                {inputFields.map((inputField, index) => (
                    <Fragment key={`${inputField}~${index}`}>
                        <Form.Label>Ingredient {index+1}</Form.Label>
                        <Form.Control
                            as='input'
                            className="form-control"
                            id="ingredient"
                            name="ingredient"
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
                        <Button
                            variant="success"
                            onSubmit={handleSubmit}
                        >
                            Save recipe
                        </Button>
                    </Fragment>
                ))}
            </Form.Group>
        </>
    )
}

export default ModalForm