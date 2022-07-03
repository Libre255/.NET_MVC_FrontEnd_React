import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IPeople } from '../../Ipeople';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const PersonDetails :React.FC<Props> = ({Person}) => {
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues:Person,
        onSubmit: values => {
    
          alert(JSON.stringify(values, null, 2));
    
        },
    })  
   
    const handleDeletBtn = (id:number | undefined)=>{
        setShow(false)
        console.log("clicked delet btn");
        console.log(id);
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