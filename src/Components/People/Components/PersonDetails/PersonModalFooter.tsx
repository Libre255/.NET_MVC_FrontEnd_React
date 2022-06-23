import React from 'react'
import { Modal, Button } from 'react-bootstrap'

interface Props{
    handleSaveBtn:() => void;
    handleDeletBtn:() => void;
}
const PersonModalFooter :React.FC<Props> = ({handleSaveBtn, handleDeletBtn}) => 
<Modal.Footer>
    <Button variant="primary" onClick={handleSaveBtn}>
        Save Changes
    </Button>
    <Button variant="danger" onClick={handleDeletBtn}>
        Delet Person
    </Button>
</Modal.Footer>;

export default PersonModalFooter;