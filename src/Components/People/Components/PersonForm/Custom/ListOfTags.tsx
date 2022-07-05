import React from 'react'
import { Button, Form } from 'react-bootstrap';
import styles from '../../../CSS/PersonForm.module.css';

const ListOfTags :React.FC<Props> = ({values, setFieldValue, errorName}) => {
  const handleOnTagClick=(optionValue:string)=> setFieldValue(`languages`, values.filter(tagValue => tagValue !== optionValue));
  return(
    <Form.Control bsPrefix={styles.Tags} as={'div'} isInvalid={!!errorName}>
        {values.map((tagValue, index)=> <Button onClick={()=>handleOnTagClick(tagValue)} className="m-1" key={index}>{tagValue}</Button>)}
    </Form.Control>
  )
}

interface Props {
    values:string[];
    setFieldValue:(field: string, value: any, shouldValidate?: boolean | undefined) => void;
    errorName:string | string[] | undefined;
}
export default ListOfTags 