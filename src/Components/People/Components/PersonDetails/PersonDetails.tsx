import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IPeople } from '../../Ipeople';
import { IPersonForm } from '../PersonFormModal/IPersonForm';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const PersonDetails :React.FC<Props> = ({Person}) => {
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues:Person,
        onSubmit: values => {
    
          alert(JSON.stringify(values, null, 2));
    
        },
    })  

    const handleSaveBtn = (personFormInputs:IPersonForm) => {
        setShow(false)
        console.log(personFormInputs);
    };
    const handleDeletBtn = ()=>{
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)};
   

    const handleClose = () => {
        setShow(false)
        formik.setValues(Person);
    };  
    return(
        <>
            <Button variant="info" onClick={handleShow}> Details </Button>
            <PersonFormModal title={`${Person.name} Details`} Person={formik.values} 
                             setFieldValue={formik.setFieldValue} handleChange={formik.handleChange}
                             modalAction={{
                                show:show,
                                handleClose:handleClose
                             }}
                             modalButtons={[
                                {name:"Save Changes", type:'info'},
                                {name:"Delet Person", type:'danger'}
                             ]}
                             />
        </>
    )
};
interface Props{
    Person:IPersonForm;
};
export default PersonDetails 