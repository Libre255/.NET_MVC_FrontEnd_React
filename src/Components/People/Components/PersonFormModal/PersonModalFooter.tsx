import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const PersonModalFooter :React.FC<Props> = ({modalButtons, handleSubmit}) => 
<Modal.Footer>
    {modalButtons.map((button, index) => 
        <Button variant={button.type} type='submit' 
                onClick={handleSubmit} key={index}>
                {button.name}
       </Button>)}
</Modal.Footer>;

interface Props{
    modalButtons:IModalButtons[];
    handleSubmit:any;
}
export interface IModalButtons{
    name:string;
    type:"primary" | "secondary" | "success" | "warning" |"danger"|"light"|"link"|"info"|"dark";
}
export default PersonModalFooter;