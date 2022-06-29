import React from 'react'
import { Button, Dropdown, InputGroup } from 'react-bootstrap'
import { IPersonForm } from '../../PersonFormModal/IPersonForm';
import { CustomToggle } from './CustomToggle';

const CustomTag :React.FC<Props> = ({PersonState, OptionsList}) => {
  const [personFormProps, setPersonFormProps] = PersonState;
  const handleSelectTag = (e:any)=> {
    e.preventDefault();
    setPersonFormProps(LanguagesList => {
      if(personFormProps.languages.includes(e.target.value)){
        return LanguagesList;
      }
      else{
        return {...LanguagesList, languages:[...LanguagesList.languages, e.target.value]}
      }
    })
  };
  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
                {personFormProps.languages.map((t, index)=> <Button className='m-1' key={index}>{t}</Button>)}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {OptionsList.map((option, i)=> <Dropdown.Item key={i} onClick={handleSelectTag} as={"button"} value={option}>{option}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    </InputGroup>
  )
}
interface Props{
  PersonState:[IPersonForm, React.Dispatch<React.SetStateAction<IPersonForm>>];
  OptionsList:string[];
}
export default CustomTag 