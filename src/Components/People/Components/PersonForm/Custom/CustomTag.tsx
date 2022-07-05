import React from 'react'
import { Dropdown, Form, InputGroup } from 'react-bootstrap'
import { CustomToggleBtn } from './CustomToggle';
import ListOfTags from './ListOfTags';

const CustomTag :React.FC<Props> = ({values, setFieldValue, OptionsList, errorName}) => {
  const handleOnSelectClick=(optionValue:string)=>{
    if(!values.includes(optionValue)){
      setFieldValue(`languages[${values.length}]`, optionValue)
    }
  };

  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown>
          <ListOfTags values={values} setFieldValue={setFieldValue} errorName={errorName}/>
          <CustomToggleBtn/> 
          <Dropdown.Menu >
              {OptionsList.map((option, i)=> <Dropdown.Item as={"button"} type={"button"} key={i} onClick={()=>handleOnSelectClick(option)}  value={option}>{option}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control.Feedback type="invalid">
            {errorName}
        </Form.Control.Feedback>
    </InputGroup>
  )
}
interface Props{
  values:string[];
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  OptionsList:string[];
  errorName:string | string[] | undefined;
}
export default CustomTag 