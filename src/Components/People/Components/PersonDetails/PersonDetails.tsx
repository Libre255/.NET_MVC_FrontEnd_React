import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IPeople } from '../../Ipeople';
import { formValidation } from '../PersonForm/formValidation';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const PersonDetails :React.FC<Props> = ({Person}) => {
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues:Person,
        onSubmit: values => {
             axios.post("https://localhost:7293/ReactMVCPeopleList/EditPerson", values)
             .then( value => {
                setShow(false);
                window.location.reload();
             })
        },
        validate:formValidation
    })  
   
    const handleDeletBtn = (id:number | undefined)=>{
        if(id){
            axios.post(`https://localhost:7293/ReactMVCPeopleList/DeletPerson/${id}`)
            .then(res => {
                setShow(false)
                window.location.reload();
            })
        }else{
            alert("Cant find Id");
        }
    }
    const handleShow = () => {setShow(true)};

    const handleClose = () => {
        setShow(false)
        formik.setValues(Person);
    };  
    return(
        <>
            <Button variant="info" onClick={handleShow}> Details </Button>
            <PersonFormModal title={`${Person.name} Details`} Person={formik.values} formikActions={formik}
                             modalAction={{
                                show:show,
                                handleClose:handleClose
                             }}
                             modalButtons={[
                                {name:"Save Changes", type:'info'},
                                {name:"Delet Person", type:'danger', onClickAction:handleDeletBtn}
                             ]}
                             />
        </>
    )
};
interface Props{
    Person:IPeople;
};
export default PersonDetails 