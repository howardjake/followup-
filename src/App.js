import { useState, useEffect } from "react";

import Header from './components/Header/Header';
import ContactBook from './components/ContactBook/ContactBook';

import { auth } from './services/firebase';
import{ getContacts } from './services/database'

import './App.css';

function App() {

async function getAppData() {
    if(!list.user) return;
    try {
      const contacts = await getContacts(list.user.uid)
      // console.log(contacts)
      setList((prevState) =>({
        ...prevState,
        contacts,
      }));
    } catch (error) {
      console.log(error)
    }
 }

  const [ list, setList ] = useState({
    user: null,
    contacts: [],
    newContact: {
      name: "", 
      email: "", 
      website: "", 
      number: "",
    },
      editMode: false,
      addMode: false,
      timeFormat: false,
  });

  useEffect(() => {
    getAppData();
    auth.onAuthStateChanged(user => {
      if (user) {
        setList(prevState => ({
        ...prevState, 
        user,
        }));
      } else {
        setList(prevState => ({
          ...prevState,
          contacts: [],
          user,
        })); 
      }
  });
  }, [list.user])

  return (
    <div className="App">
      <Header user={list.user}/>
      {list.user ? 
      <ContactBook list={list} setList={setList}/> :
      ""
      }
      
    </div>
  );
}

export default App;
