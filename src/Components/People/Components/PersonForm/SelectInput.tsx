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
        <option>{SelectedItem}</option>
        {ListOfOptions.map((options, index) => 
            <option key={index} value={options}>
                {options}
            </option>)}
    </Form.Select>
</InputGroup>;

export default SelectInput;