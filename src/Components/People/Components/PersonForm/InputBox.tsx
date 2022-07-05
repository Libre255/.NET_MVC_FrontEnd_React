import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { IErrorPropertie } from './formValidation';

interface Props{
    title:string;
    inputType:string;
    inputValue?:string | number;
    onChangeFun:(e:any)=>void;
    inputPropertieName:string;
    errorName:IErrorPropertie;
}
const InputBox :React.FC<Props> = ({inputPropertieName, title, inputType, inputValue, onChangeFun, errorName}) =>
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