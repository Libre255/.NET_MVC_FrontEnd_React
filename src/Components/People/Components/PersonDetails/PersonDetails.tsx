import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IPeople } from '../../Ipeople';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const PersonDetails :React.FC<Props> = ({Person}) => {
    const [show, setShow] = useState(false);

    const handleSaveBtn = (a:any) => {
        setShow(false)
        console.log(a);
    };
    const handleDeletBtn = ()=>{
        setShow(false)
    }
    const handleShow = () => {
        // setPersonFormProps(Person);
        setShow(true)};
    const handleClose = () => setShow(false);

    return(
        <>
            <Button variant="info" onClick={handleShow}> Details </Button>
            <PersonFormModal title={`${Person.name} Details`} Person={Person}
                             modalAction={{
                                show:show,
                                handleClose:handleClose
                             }}
                             modalButtons={[
                                {name:"Save Changes", type:'info', clickEvent:handleSaveBtn},
                                {name:"Delet Person", type:'danger', clickEvent:handleDeletBtn}
                             ]}
                             />
        </>
    )
};
interface Props{
    Person:IPeople;
};
export default PersonDetails 