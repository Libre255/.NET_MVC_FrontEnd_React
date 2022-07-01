import { FormikProvider, useFormik } from 'formik';
import React from 'react'
import { Form } from 'react-bootstrap'
import { useCities } from '../../../../Citites/Hooks/useCities';
import { useLanguages } from '../../../../Languages/Hooks/useLanguages';
import { IPersonForm } from '../PersonFormModal/IPersonForm';
import CustomTag from './Custom/CustomTag';
import InputBox from './InputBox';
import SelectInput from './SelectInput';

const PersonForm :React.FC<Props> = ({personFormDetails}) => {
  const [personDetails, setPersonFormDetails] = personFormDetails;
  const {CitiesList} = useCities();
  const {LanguagesList} = useLanguages();

  const formik  = useFormik({
    initialValues:{
      name:personDetails.name,
      phoneNumber:personDetails.phoneNumber,
      city:personDetails.city,
      languages:personDetails.languages
    },
    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

    },
    enableReinitialize:true
  })
  return(
    <Form onSubmit={formik.handleSubmit}>
      <InputBox inputType="text" inputValue={formik.values.name} 
                name="Name" onChangeFun={formik.handleChange} 
                invalidText="Please write your name" />
      <InputBox inputType="number" inputValue={formik.values.phoneNumber} 
                name="Phone Number" onChangeFun={formik.handleChange} 
                invalidText="Please insert a phone number." />
      <SelectInput Name='City' SelectedItem={formik.values.city} 
                   onChangeFun={formik.handleChange} ListOfOptions={CitiesList}/>
      <CustomTag values={formik.values.languages} handleChange={formik.setFieldValue} OptionsList={LanguagesList}/>
    </Form>
  )
}
interface Props{
  personFormDetails:[IPersonForm, React.Dispatch<React.SetStateAction<IPersonForm>>]
}
export default PersonForm 