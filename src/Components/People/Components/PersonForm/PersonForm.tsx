import { FormikErrors } from 'formik/dist/types';
import React from 'react'
import { Form } from 'react-bootstrap'
import { useCities } from '../../../../Citites/Hooks/useCities';
import { useLanguages } from '../../../../Languages/Hooks/useLanguages';
import { IPersonForm } from '../PersonFormModal/IPersonForm';
import CustomTag from './Custom/CustomTag';
import InputBox from './InputBox';
import SelectInput from './SelectInput';

const PersonForm :React.FC<Props> = ({personDetails, handleChanges, setField}) => {
  const {CitiesList} = useCities();
  const {LanguagesList} = useLanguages();
  
  return(
    <Form >
      <InputBox inputType="text" inputValue={personDetails.name} inputPropertieName='name'
                title="Name" onChangeFun={handleChanges} 
                invalidText="Please write your name" />
      <InputBox inputType="number" inputValue={personDetails.phoneNumber} inputPropertieName="phoneNumber"
                title="Phone Number" onChangeFun={handleChanges} 
                invalidText="Please insert a phone number." />
      <SelectInput Name='City' SelectedItem={personDetails.city} 
                   onChangeFun={handleChanges} ListOfOptions={CitiesList}/>
      <CustomTag values={personDetails.languages} handleChange={setField} OptionsList={LanguagesList}/>
    </Form>
  )
}
interface Props{
  personDetails:IPersonForm;
  handleChanges:{
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  }
  setField:any;
}
export default PersonForm 