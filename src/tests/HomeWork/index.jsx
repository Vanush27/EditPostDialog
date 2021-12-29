import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";

import "./styles.css";

const EditPost = (props) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    <input
                        onChange={props.handleChangeTitle}
                        type="text"
                        value={props.title}
                        name={props.title}
                        placeholder="title"/>
                </Card.Title>
                <Card.Text>
                    <input
                        onChange={props.handleChangeDesc}
                        type="text"
                        value={props.description}
                        name={props.description}
                        placeholder="description"/>
                </Card.Text>

                <button onClick={props.handleShow}
                        type="button"
                        className="btn btn-primary">
                    Edit
                </button>

                <button
                    type="button" onClick={props.handleRemove} className="btn btn-danger">Delete
                </button>
            </Card.Body>
        </Card>
    )
}

const ModalDialog = (props) => {
    return (<div className="modal-dialog-centered" aria-hidden="true">
            <Modal show={props.show}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <h5>Title:</h5>
                            <input type="text" onChange={props.handleChangeTitle} value={props.title}/>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Description:</p>
                        <input type="text" onChange={props.handleChangeDesc} value={props.description}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={props.handleHide}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}

const HomeWorkEdit = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [show, setShow] = useState(false);


    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeDesc(e) {
        setDescription(e.target.value);
    }

    function handleRemove() {
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <EditPost handleChangeTitle={handleChangeTitle}
                      handleChangeDesc={handleChangeDesc}
                      handleShow={handleShow}
                      handleRemove={handleRemove}
                      title={title}
                      description={description}/>
            <ModalDialog
                show={show}
                handleChangeTitle={handleChangeTitle}
                handleChangeDesc={handleChangeDesc}
                handleHide={handleHide}
                title={title}
                description={description}
            />
        </div>
    )
}

export default HomeWorkEdit