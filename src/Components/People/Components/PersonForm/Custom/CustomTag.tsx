import React from 'react'
import { Button, Dropdown, InputGroup } from 'react-bootstrap'
import { IPersonForm } from '../../PersonFormModal/IPersonForm';
import { CustomToggle } from './CustomToggle';

const CustomTag :React.FC<Props> = ({values, handleChange, OptionsList}) => {
 
  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
                {values.map((t, index)=> <Button className='m-1' key={index}>{t}</Button>)}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {OptionsList.map((option, i)=> <Dropdown.Item as={"button"} type={"button"} key={i} onClick={()=>handleChange(`languages[${values.length}]`, option)}  value={option}>{option}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    </InputGroup>
  )
}
interface Props{
  values:string[];
  handleChange: any;
  OptionsList:string[];
}
export default CustomTag 