import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const CreatePerson :React.FC = () => {
    const [show, setshow] = useState<boolean>(false);
    const handleClose = ()=>{setshow(false)};
    const handleCreateBtn = async(NewPeopleData:any)=>{
        // setshow(false)
        //const {data} = await axios.post('https://localhost:7293/ReactMVCPeopleList/AddPerson',NewPeopleData); 
    };
    return(
    <div>
        <Button variant='primary' onClick={()=>setshow(true)}>Create person</Button>
        <PersonFormModal title='Create a person' modalAction={{show:show, handleClose:handleClose}} 
                         modalButtons={[{name:"Create person", type:'success', clickEvent:handleCreateBtn}]} />
    </div>
    )
}

export default CreatePerson 