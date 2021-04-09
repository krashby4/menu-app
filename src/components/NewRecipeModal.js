import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RecipeForm from './RecipeForm'

function NewRecipeModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="newRecipeModal">
            <Button variant="primary" onClick={handleShow}>
                Add new recipe
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RecipeForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NewRecipeModal