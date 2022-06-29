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
    <Form.Select aria-label="Default select example" defaultValue={"-- select an option --"} className="form-select" onChange={onChangeFun}>
        <option hidden disabled value={"-- select an option --"}> -- select an option -- </option>
        {ListOfOptions.map((optionValue, index) =>{
            if(SelectedItem === optionValue){
                return <option selected key={index} value={optionValue}>{optionValue}</option>
            }else {
                return <option  key={index} value={optionValue}>{optionValue}</option>
            }
        }
        )}
    </Form.Select>
</InputGroup>;
export default SelectInput;