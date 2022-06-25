import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { IPersonForm } from './IPersonForm';

const PersonModalFooter :React.FC<Props> = ({modalButtons, personFormDetails}) => 
<Modal.Footer>
    {modalButtons.map((button, index) => <Button variant={button.type} onClick={()=>button.clickEvent(personFormDetails)} key={index}>{button.name}</Button>)}
</Modal.Footer>;

interface Props{
    modalButtons:IModalButtons[];
    personFormDetails:IPersonForm;
}
export interface IModalButtons{
    name:string;
    clickEvent:(personDetails:IPersonForm)=>void;
    type:"primary" | "secondary" | "success" | "warning" |"danger"|"light"|"link"|"info"|"dark";
}
export default PersonModalFooter;