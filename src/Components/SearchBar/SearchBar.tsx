import React from 'react'
import { Button } from 'react-bootstrap';

interface Props{
  setSearchInput:React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar :React.FC<Props> = ({setSearchInput}) => 
<>
  <span className="input-group-text" id="basic-addon1">Search</span>
  <input onChange={e => setSearchInput(e.target.value)} type="text"
         className="form-control" placeholder="Person Name"
         aria-label="PersonName" aria-describedby="basic-addon1"/>
  
</>;

export default SearchBar;