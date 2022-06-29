import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'

interface Props{
    name:string;
    inputType:string;
    inputValue?:string | number;
    onChangeFun:(e:any)=>void;
    invalidText:string;
}
const InputBox :React.FC<Props> = ({name, inputType, inputValue, onChangeFun, invalidText}) =>
<InputGroup className="input-group mb-3">
    <InputGroup.Text>
        {name}
    </InputGroup.Text>
    <FormControl type={inputType} value={inputValue ?? ""} onChange={onChangeFun}/>
    <Form.Control.Feedback type="invalid">
        {invalidText}
    </Form.Control.Feedback>
</InputGroup>

export default InputBox 