import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IPeople } from '../../Ipeople';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const CreatePerson :React.FC = () => {
    const [show, setshow] = useState(false);
    const handleClose = ()=>{setshow(false)};
    const handleCreateBtn = async(NewPeopleData:any)=>{
        // console.log(NewPeopleData);
        const postResult = await axios.post('https://localhost:7293/ReactMVCPeopleList/AddPerson',NewPeopleData); //got it
        console.log(postResult);
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