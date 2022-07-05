import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const PersonModalFooter :React.FC<Props> = ({modalButtons, handleSubmit, personID}) => {
    const checkClickAction = (clickAction:((id: number | undefined) => void) | undefined)=>{
        if(clickAction){
            clickAction(personID)
        }else{
            handleSubmit();
        }
    }
    return(
        <Modal.Footer>
            {modalButtons.map((button, index) => 
                <Button variant={button.type} type='submit' 
                        onClick={()=>checkClickAction(button.onClickAction)} key={index}>
                        {button.name}
            </Button>)}
        </Modal.Footer>
    )
};

interface Props{
    modalButtons:IModalButtons[];
    handleSubmit:(e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    personID:number | undefined;
}
export interface IModalButtons{
    name:string;
    type:"primary" | "secondary" | "success" | "warning" |"danger"|"light"|"link"|"info"|"dark";
    onClickAction?:(id:number | undefined)=>void;
}
export default PersonModalFooter;