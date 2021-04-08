import { useState, useEffect } from "react";

import ContactBook from './components/ContactBook/ContactBook';
import NewContact from './components/NewContact/NewContact';

import './App.css';

function App() {
  const { list, setList } = useState();
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Followup</h1>
      </header>
      <ContactBook />
      <NewContact />
    </div>
  );
}

export default App;
