import React from 'react'
import { IPeople } from '../Ipeople'
import PersonDetails from './PersonDetails/PersonDetails';

const PersonRow :React.FC<Props> = ({Person}) => 
<tr>
  <td>{Person.id}</td>
  <td>{Person.name}</td>
  <td>{Person.phoneNumber}</td>
  <td>{Person.city}</td>
  <td>{Person.languages.map(L => <span className="m-1">{L}</span>)}</td>
  <td>
      <PersonDetails key={Person.id} Person={Person}/>
  </td>
</tr>;
interface Props{
  Person:IPeople;
  key:React.Key | null | undefined;
}
export default PersonRow 