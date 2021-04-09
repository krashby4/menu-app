import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ModalForm from './ModalForm'

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
                    <Form>
                        <Form.Group controlId="recipeInfo">
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control as='input'></Form.Control>
                            <Form.Label>Recipe Source</Form.Label>
                            <Form.Control as='input'></Form.Control>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as='textarea'></Form.Control>
                        </Form.Group>
                        <ModalForm />
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save recipe
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
}

export default NewRecipeModal