import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { CleanPersonFormInputs } from '../PersonFormModal/IPersonForm';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const CreatePerson :React.FC = () => {
    const [show, setshow] = useState<boolean>(false);
    const formik = useFormik({
        initialValues:CleanPersonFormInputs,
        onSubmit: values => {
    
          alert(JSON.stringify(values, null, 2));
    
        },
    }) 

    const handleClose = ()=>{
        setshow(false);
        formik.setValues(CleanPersonFormInputs)
    };
    const handleCreateBtn = async(NewPeopleData:any)=>{
        // setshow(false)
        //const {data} = await axios.post('https://localhost:7293/ReactMVCPeopleList/AddPerson',NewPeopleData); 
    };
    
    return(
    <div>
        <Button variant='primary' onClick={()=>setshow(true)}>Create person</Button>
        <PersonFormModal title='Create a person' Person={formik.values}
                         setFieldValue={formik.setFieldValue} handleChange={formik.handleChange}
                         modalAction={{show:show, handleClose:handleClose}} 
                         modalButtons={[{name:"Create person", type:'success'}]} />
    </div>
    )
}

export default CreatePerson 