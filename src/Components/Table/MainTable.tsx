import React from 'react'
import {Table} from 'react-bootstrap';
import PersonRow from '../People/Components/PersonRow';
import { IPeople } from '../People/Ipeople';
import { FilterByPeopleName } from '../People/Methods/FilterByPeopleName';

interface Props {
  ListOfPeople:IPeople[];
  SearchInput:string;
}
const MainTable :React.FC<Props> = ({ListOfPeople, SearchInput}) => {

  return(
    <Table striped bordered hover variant='dark'>
        <TableHead/>
        <tbody>
            {ListOfPeople
              .filter(People => FilterByPeopleName(People.name, SearchInput)) 
              .map(People => <PersonRow key={People.id} Person={People}/>)}
        </tbody>
    </Table>
  )
}

const TableHead :React.FC = () =>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>City</th>
      <th>Language</th>
      <th>Actions</th>
    </tr>
  </thead>;

export default MainTable 