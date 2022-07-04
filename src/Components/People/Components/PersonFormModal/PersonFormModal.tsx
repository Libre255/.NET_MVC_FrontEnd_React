import React from 'react'
import { Modal } from 'react-bootstrap'
import { IPeople } from '../../Ipeople'
import PersonForm from '../PersonForm/PersonForm'
import PersonModalFooter, { IModalButtons } from './PersonModalFooter'


const PersonFormModal :React.FC<Props> = (props) => {
    const {title, modalAction: showState, Person, modalButtons, formikActions} = props;
    const {show, handleClose} = showState;
    
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='text-dark' closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PersonForm personDetails={Person} formikActions={formikActions}/>
            </Modal.Body>
            <PersonModalFooter modalButtons={modalButtons} handleSubmit={formikActions.handleSubmit} personID={Person.id}/>
        </Modal>
    )
}
interface Props{
    title:string;
    modalAction:{
        show:boolean;
        handleClose:()=>void
    };
    Person:IPeople;
    modalButtons:IModalButtons[];
    formikActions:{
        handleChange:any;
        handleSubmit:any;
        setFieldValue:any;
        errors:any;
    };
}

export default PersonFormModal;