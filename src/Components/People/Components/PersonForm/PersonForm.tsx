import React from 'react'
import { Form } from 'react-bootstrap'
import { IPersonForm } from '../PersonFormModal/IPersonForm';
import CustomTag from './CustomTag';
import InputBox from './InputBox';
import SelectInput from './SelectInput';

const PersonForm :React.FC<Props> = ({personFormDetails}) => {
  const [personDetails, setPersonFormDetails] = personFormDetails;
  
  const updateName = (e:any)=> setPersonFormDetails(p => ({...p, name:e.target.value}));
  const updatePhoneNumber = (e:any)=> setPersonFormDetails(p => ({...p, phoneNumber:e.target.value}));
  const updateCity =(e:any)=> setPersonFormDetails(p => ({...p, city:e.target.value}));
  
  return(
    <Form>
      <InputBox inputType="text" inputValue={personDetails.name} 
                name="Name" onChangeFun={updateName} 
                invalidText="Please write your name" />
      <InputBox inputType="number" inputValue={personDetails.phoneNumber} 
                name="Phone Number" onChangeFun={updatePhoneNumber} 
                invalidText="Please insert a phone number." />
      <SelectInput Name='City' SelectedItem={personDetails.city} 
                   onChangeFun={updateCity} ListOfOptions={["1", "2","3"]}/>
      <CustomTag PersonState={[personDetails, setPersonFormDetails]}/>
    </Form>
  )
}
interface Props{
  personFormDetails:[IPersonForm, React.Dispatch<React.SetStateAction<IPersonForm>>]
}
export default PersonForm 