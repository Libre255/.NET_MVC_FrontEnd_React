import React from 'react'
import { Dropdown, InputGroup } from 'react-bootstrap'
import { CustomToggleBtn } from './CustomToggle';
import ListOfTags from './ListOfTags';

const CustomTag :React.FC<Props> = ({values, setFieldValue, OptionsList}) => {
  const handleOnSelectClick=(optionValue:string)=>{
    if(!values.includes(optionValue)){
      setFieldValue(`languages[${values.length}]`, optionValue)
    }
  };

  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown>
          <ListOfTags values={values} setFieldValue={setFieldValue}/>
          <CustomToggleBtn/> 
          <Dropdown.Menu >
              {OptionsList.map((option, i)=> <Dropdown.Item as={"button"} type={"button"} key={i} onClick={()=>handleOnSelectClick(option)}  value={option}>{option}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
    </InputGroup>
  )
}
interface Props{
  values:string[];
  setFieldValue: any;
  OptionsList:string[];
}
export default CustomTag 