import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'
import { IPeople } from '../../Ipeople'
import PersonForm from '../PersonForm/PersonForm'
import { CleanPersonFormInputs, IPersonForm } from './IPersonForm'
import PersonModalFooter, { IModalButtons } from './PersonModalFooter'


const PersonFormModal :React.FC<Props> = ({title, modalAction: showState, Person, modalButtons}) => {
    const [personFormDetails, setPersonFormDetails] = useState<IPersonForm>(Person || CleanPersonFormInputs);
    const {show, handleClose}  = showState;

    useEffect(() => { setPersonFormDetails(Person ?? CleanPersonFormInputs ) }, [show]);
    
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='text-dark' closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PersonForm personFormDetails={[personFormDetails, setPersonFormDetails]}/>
            </Modal.Body>
            <PersonModalFooter modalButtons={modalButtons} personFormDetails={personFormDetails}/>
        </Modal>
    )
}
interface Props{
    title:string;
    modalAction:{
        show:boolean;
        handleClose:()=>void
    };
    Person?:IPeople;
    modalButtons:IModalButtons[];
}

export default PersonFormModal 