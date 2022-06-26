import React from 'react'
import { IPeople } from '../../Ipeople'
import PersonDetails from '../PersonDetails/PersonDetails';

const PersonRow :React.FC<Props> = ({Person}) => 
<tr>
  <td>{Person.id}</td>
  <td>{Person.name}</td>
  <td>{Person.phoneNumber}</td>
  <td>{Person.city}</td>
  <td>{Person.languages.map((Language, I)=> <span key={I} className="m-1">{Language}</span>)}</td>
  <td>
      <PersonDetails Person={Person}/>
  </td>
</tr>;

interface Props{
  Person:IPeople;
}
export default PersonRow 