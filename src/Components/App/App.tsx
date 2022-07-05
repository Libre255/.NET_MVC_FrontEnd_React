import { useState } from 'react';
import TableOfPeople from '../People/Components/TableOfPeople/TableOfPeople';
import styles from './App.module.css';
import GlobalContext from './GlobalContext';
import HeaderInputs from './HeaderInputs';
import ListOfPeopleTitle from './ListOfPeopleTitle';

const AppStyle:string = `${styles.App} ${styles.Center} border border-dark container mt-5`;

function App() {
  const [SearchInput, setSearchInput] = useState<string>("");
 
  return (
    <GlobalContext>
      <div className={AppStyle}>
        <ListOfPeopleTitle/>
        <HeaderInputs setSearchInput={setSearchInput}/>
        <TableOfPeople SearchInput={SearchInput}/>
      </div>
    </GlobalContext>
  );
};

export default App;
