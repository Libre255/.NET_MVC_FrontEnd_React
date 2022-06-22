import React from 'react'
import { IPeople } from '../Ipeople'
import PersonDetails from './PersonDetails';

interface Props{
    Person:IPeople;
}
const PersonRow :React.FC<Props> = ({Person}) => {
  return(
    <tr>
        <td>{Person.id}</td>
        <td>{Person.name}</td>
        <td>{Person.phoneNumber}</td>
        <td>{Person.city}</td>
        <td>{Person.languages.map(L => `${L }`)}</td>
        <td>
            <PersonDetails Person={Person}/>
        </td>
    </tr>
  )
}

export default PersonRow 