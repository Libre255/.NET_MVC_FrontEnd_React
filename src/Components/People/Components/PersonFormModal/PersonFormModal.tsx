import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { IPeople } from '../../Ipeople'
import PersonForm from '../PersonForm/PersonForm'
import { CleanPersonFormInputs, IPersonForm } from './IPersonForm'
import PersonModalFooter, { IModalButtons } from './PersonModalFooter'


const PersonFormModal :React.FC<Props> = (props) => {
    const {title, modalAction: showState, Person, modalButtons, handleChange, setFieldValue} = props
    const {show, handleClose}  = showState;
    
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='text-dark' closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PersonForm personDetails={Person} handleChanges={handleChange} 
                            setField={setFieldValue} />
            </Modal.Body>
            <PersonModalFooter modalButtons={modalButtons} handleSubmit={handleChange}/>
        </Modal>
    )
}
interface Props{
    title:string;
    modalAction:{
        show:boolean;
        handleClose:()=>void
    };
    Person:IPersonForm;
    modalButtons:IModalButtons[];
    handleChange:any;
    setFieldValue:any;
}

export default PersonFormModal;


// initialValues:{
//     name:personValues.name,
//     phoneNumber:personValues.phoneNumber,
//     city:personValues.city,
//     languages:personValues.languages
// }