import React from 'react'
import CreatePerson from '../People/Components/CreatePerson/CreatePerson'
import SearchBar from '../SearchBar/SearchBar'

const HeaderInputs :React.FC<Props> = ({setSearchInput}) => {
  return(
    <div className="input-group mb-3 mt-4">
        <SearchBar setSearchInput={setSearchInput}/>
        <CreatePerson/>
    </div>
  )
}
interface Props{
    setSearchInput:React.Dispatch<React.SetStateAction<string>>;
}
export default HeaderInputs 