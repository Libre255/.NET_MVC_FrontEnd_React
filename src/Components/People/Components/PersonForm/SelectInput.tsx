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
    <Form.Select aria-label="Default select example"className="form-select" onChange={onChangeFun}>
        {ListOfOptions.map((optionValue, index) => 
            optionValue === SelectedItem ? <option selected key={index} value={optionValue}>{optionValue}</option>:
            <option key={index} value={optionValue}>
                {optionValue}
            </option>)}
    </Form.Select>
</InputGroup>;

export default SelectInput;