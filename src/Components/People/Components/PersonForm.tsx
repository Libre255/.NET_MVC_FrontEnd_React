import React, { useEffect } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { IPeople } from '../Ipeople'
import CustomTag from './CustomTag';

interface Props{
    Person:IPeople;
    PersonFormPropsState:[IPeople, React.Dispatch<React.SetStateAction<IPeople>>]
}
const PersonForm :React.FC<Props> = ({Person,PersonFormPropsState}) => {
  const [personFormProps, setPersonFormProps] = PersonFormPropsState;
  
    useEffect(() => {
        setPersonFormProps(Person)
    }, [])


  const updateName = (e:any)=> setPersonFormProps(p => ({...p, name:e.target.value}));
  const updatePhoneNumber = (e:any)=> setPersonFormProps(p => ({...p, phoneNumber:e.target.value}));
  const updateCity =(e:any)=> setPersonFormProps(p => ({...p, city:e.target.value}));
  const updateLanguage =(e:any)=> setPersonFormProps(p => ({...p, languages:[...p.languages, e.target.value]}));
  
  return(
    <Form>
      <InputGroup className="input-group mb-3">
        <InputGroup.Text >Name</InputGroup.Text>
        <FormControl type='text' value={personFormProps.name} onChange={updateName}/>
        <Form.Control.Feedback type="invalid">
            Please write a name.
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="input-group mb-3">
        <InputGroup.Text >Phone Number</InputGroup.Text>
        <FormControl type='number' value={personFormProps.phoneNumber} onChange={updatePhoneNumber}/>
        <Form.Control.Feedback type="invalid">
            Please insert a phone number.
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="input-group mb-3">
        <InputGroup.Text >City</InputGroup.Text>
        <Form.Select aria-label="Default select example"className="form-select" onChange={updateCity}>
            <option>{personFormProps.city}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Form.Select aria-label="Default select example"className="form-select" onChange={updateLanguage} >
            <option><Button variant="danger" >
                        Delet Person
                    </Button></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </InputGroup>
      <CustomTag/>
    </Form>
  )
}
export default PersonForm 