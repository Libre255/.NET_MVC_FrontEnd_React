import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'

interface Props{
    Name:string;
    onChangeFun:(e:any)=>void;
    ListOfOptions:string[];
    SelectedItem:string;
}
const SelectInput :React.FC<Props> = ({Name, onChangeFun, ListOfOptions, SelectedItem}) => 
<InputGroup className="input-group mb-3">
    <InputGroup.Text>{Name}</InputGroup.Text>
    <Form.Select value={SelectedItem === "" ? "-- select an option --" : SelectedItem} className="form-select" onChange={onChangeFun}>
        <option hidden disabled value={"-- select an option --"}> -- select an option -- </option>
        {ListOfOptions.map((optionValue, index) =><option  key={index} value={optionValue}>{optionValue}</option>)}
    </Form.Select>
</InputGroup>;
export default SelectInput;