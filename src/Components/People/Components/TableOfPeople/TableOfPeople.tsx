import React from 'react'
import {Table} from 'react-bootstrap';
import PersonRow from './PersonRow';
import { IPeople } from '../../Ipeople';
import { FilterByPeopleName } from '../../Methods/FilterByPeopleName';
import { usePeople } from '../../Hooks/usePeople';

const TableOfPeople :React.FC<Props> = ({SearchInput}) =>{
  const {listOfPeople} = usePeople();

  return(
    <Table striped bordered hover variant='dark'>
      <TableHead/>
      <tbody>
          {listOfPeople
            .filter(People => FilterByPeopleName(People.name, SearchInput))
            .map((People) => <PersonRow key={People.id} Person={People}/>)}
      </tbody>
    </Table>
  )
}
interface Props {
  SearchInput:string;
};

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

export default TableOfPeople 