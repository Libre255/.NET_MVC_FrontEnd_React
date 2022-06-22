import { useState } from 'react';
import { usePeople } from '../People/Hooks/usePeople';
import SearchBar from '../SearchBar/SearchBar';
import MainTable from '../Table/MainTable';
import styles from './App.module.css';
import ListOfPeopleTitle from './ListOfPeopleTitle';

const AppStyle:string = `${styles.App} ${styles.Center} border border-dark container mt-5 `

function App() {
  const {listOfPeople} = usePeople();
  const [SearchInput, setSearchInput] = useState("");

  return (
    <div className={AppStyle}>
      <ListOfPeopleTitle/>
      <SearchBar setSearchInput={setSearchInput}/>
      <MainTable ListOfPeople={listOfPeople} SearchInput={SearchInput}/>
    </div>
  );
};

export default App;
