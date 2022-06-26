import React from 'react'
import { IPeople } from '../../Ipeople'
import PersonDetails from '../PersonDetails/PersonDetails';

const PersonRow :React.FC<Props> = ({Person}) => 
<tr>
  <td>{Person.id}</td>
  <td>{Person.name}</td>
  <td>{Person.phoneNumber}</td>
  <td>{Person.city}</td>
  <td>{Person.languages.map(L => <span className="m-1">{L}</span>)}</td>
  <td>
      <PersonDetails Person={Person}/>
  </td>
</tr>;

interface Props{
  Person:IPeople;
}
export default PersonRow 