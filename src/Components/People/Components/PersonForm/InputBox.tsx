import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'

interface Props{
    title:string;
    inputType:string;
    inputValue?:string | number;
    onChangeFun:(e:any)=>void;
    invalidText:string;
    inputPropertieName:string;
    errorName:any;
}
const InputBox :React.FC<Props> = ({inputPropertieName, title, inputType, inputValue, onChangeFun, invalidText, errorName}) =>
<InputGroup hasValidation className="input-group mb-3">
    <InputGroup.Text>
        {title}
    </InputGroup.Text>
    <FormControl id={inputPropertieName} name={inputPropertieName} isInvalid={!!errorName} required
                 type={inputType} value={inputValue} onChange={onChangeFun}/>
    <Form.Control.Feedback type="invalid">
        {errorName}
    </Form.Control.Feedback>
</InputGroup>

export default InputBox 