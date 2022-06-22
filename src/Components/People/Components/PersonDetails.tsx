import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IPeople } from '../Ipeople';
import PersonForm from './PersonForm';

interface Props{
    Person:IPeople;
}

const PersonDetails :React.FC<Props> = ({Person}) => {
    const [show, setShow] = useState(false);
    const [personFormProps, setPersonFormProps] = useState<IPeople>(Person);

    const handleSaveBtn = () => {
        setShow(false)
        console.log("handleSaveBtn ",personFormProps);
    };
    const handleDeletBtn = ()=>{
        setShow(false)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
    <>
        <Button variant="info" onClick={handleShow}>
            Details
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title color='black'>{Person.name+" Details"}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <PersonForm Person={Person} PersonFormPropsState={[personFormProps, setPersonFormProps]}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveBtn}>
                        Save Changes
                    </Button>
                    <Button variant="danger" onClick={handleDeletBtn}>
                        Delet Person
                    </Button>
                </Modal.Footer>
        </Modal>
    </>

    )
}

export default PersonDetails 