import React from 'react'
import { Form } from 'react-bootstrap'
import { useCities } from '../../../../Citites/Hooks/useCities';
import { useLanguages } from '../../../../Languages/Hooks/useLanguages';
import { IPeople } from '../../Ipeople';
import CustomTag from './Custom/CustomTag';
import InputBox from './InputBox';
import SelectInput from './SelectInput';

const PersonForm :React.FC<Props> = ({personDetails, formikActions}) => {
  const {CitiesList} = useCities();
  const {LanguagesList} = useLanguages();
  const {handleChange, setFieldValue} = formikActions;

  return(
    <Form >
      <InputBox inputType="text" inputValue={personDetails.name} inputPropertieName='name'
                title="Name" onChangeFun={handleChange} 
                invalidText="Please write your name" />
      <InputBox inputType="number" inputValue={personDetails.phoneNumber} inputPropertieName="phoneNumber"
                title="Phone Number" onChangeFun={handleChange} 
                invalidText="Please insert a phone number." />
      <SelectInput Name='City' SelectedItem={personDetails.city} 
                   setFieldValue={setFieldValue} ListOfOptions={CitiesList}/>
      <CustomTag values={personDetails.languages} setFieldValue={setFieldValue} OptionsList={LanguagesList}/>
    </Form>
  )
}
interface Props{
  personDetails:IPeople;
  formikActions:{
    handleChange:any;
    setFieldValue:any;
  };
}
export default PersonForm //contains