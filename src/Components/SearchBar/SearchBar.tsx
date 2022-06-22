import React from 'react'

interface Props{
  setSearchInput:React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar :React.FC<Props> = ({setSearchInput}) => 
<div className="input-group mb-3 mt-4">
  <span className="input-group-text" id="basic-addon1">Search</span>
  <input onChange={e => setSearchInput(e.target.value)} type="text"
         className="form-control" placeholder="Person Name"
         aria-label="PersonName" aria-describedby="basic-addon1"/>
</div>;

export default SearchBar;