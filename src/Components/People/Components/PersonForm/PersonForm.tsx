import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { IPeople } from '../../Ipeople'
import CustomTag from './CustomTag';
import InputBox from './InputBox';
import SelectInput from './SelectInput';

interface Props{
    Person:IPeople;
    PersonFormPropsState:[IPeople, React.Dispatch<React.SetStateAction<IPeople>>]
}
const PersonForm :React.FC<Props> = ({Person, PersonFormPropsState}) => {
  const [personFormProps, setPersonFormProps] = PersonFormPropsState;
  
  useEffect(() => {
      setPersonFormProps(Person)
  }, [])

  const updateName = (e:any)=> setPersonFormProps(p => ({...p, name:e.target.value}));
  const updatePhoneNumber = (e:any)=> setPersonFormProps(p => ({...p, phoneNumber:e.target.value}));
  const updateCity =(e:any)=> setPersonFormProps(p => ({...p, city:e.target.value}));
  
  return(
    <Form>
      <InputBox inputType="text" inputValue={personFormProps.name} 
                name="Name" onChangeFun={updateName} 
                invalidText="Please write your name" />
      <InputBox inputType="number" inputValue={personFormProps.phoneNumber} 
                name="Phone Number" onChangeFun={updatePhoneNumber} 
                invalidText="Please insert a phone number." />
      <SelectInput Name='City' SelectedItem={personFormProps.city} 
                   onChangeFun={updateCity} ListOfOptions={["1", "2","3"]}/>
      <CustomTag PersonState={[personFormProps, setPersonFormProps]}/>
    </Form>
  )
}
export default PersonForm 