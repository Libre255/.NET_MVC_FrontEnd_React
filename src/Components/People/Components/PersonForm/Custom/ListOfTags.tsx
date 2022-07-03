import React from 'react'
import { Button } from 'react-bootstrap';
import styles from '../../../CSS/PersonForm.module.css';

const ListOfTags :React.FC<Props> = ({values, setFieldValue}) => {
  const handleOnTagClick=(optionValue:string)=> setFieldValue(`languages`, values.filter(tagValue => tagValue !== optionValue));
  return(
    <div className={styles.Tags}>
        {values.map((tagValue, index)=> <Button onClick={()=>handleOnTagClick(tagValue)} className="m-1" key={index}>{tagValue}</Button>)}
    </div>
  )
}

interface Props {
    values:string[];
    setFieldValue:any;
}
export default ListOfTags 