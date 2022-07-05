import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { IErrorPropertie } from './formValidation';

interface Props{
    Name:string;
    setFieldValue:(field: string, value: any, shouldValidate?: boolean | undefined) => void;
    ListOfOptions:string[];
    SelectedItem:string;
    errorName:IErrorPropertie;
}
const SelectInput :React.FC<Props> = ({Name, setFieldValue, ListOfOptions, SelectedItem, errorName}) => 
<InputGroup className="input-group mb-3">
    <InputGroup.Text>{Name}</InputGroup.Text>
    <Form.Select isInvalid={!!errorName} value={SelectedItem === "" ? "-- select an option --" : SelectedItem} className="form-select" onChange={(e)=>setFieldValue("city", e.target.value)} >
        <option hidden disabled value={"-- select an option --"}> -- select an option -- </option>
        {ListOfOptions.map((optionValue, index) =><option  key={index} value={optionValue}>{optionValue}</option>)}
    </Form.Select>
    <Form.Control.Feedback type="invalid">
        {errorName}
    </Form.Control.Feedback>
</InputGroup>;
export default SelectInput;