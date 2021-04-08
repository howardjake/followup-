import { useState, useEffect } from "react";

import ContactBook from './components/ContactBook/ContactBook';
import NewContact from './components/NewContact/NewContact';

import './App.css';

function App() {

  const [ list, setList ] = useState({
    contacts: [],
    newContact: {
      name: "", 
      email: "", 
      website: "", 
      number: "",
    }
  });

  console.log(list.newContact.name)
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Followup</h1>
      </header>
      <ContactBook list={list} />
      <NewContact setList={setList} list={list} />
    </div>
  );
}

export default App;
