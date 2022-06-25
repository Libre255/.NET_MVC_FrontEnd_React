import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'

const HeaderInputs :React.FC<Props> = ({setSearchInput}) => {
  const [show, setshow] = useState(false);
  return(
    <div className="input-group mb-3 mt-4">
        <SearchBar setSearchInput={setSearchInput}/>
        <Button variant='primary'>Create person</Button>
    </div>
  )
}
interface Props{
    setSearchInput:React.Dispatch<React.SetStateAction<string>>;
}
export default HeaderInputs 