import styles from '../NewContact/NewContact.module.css';

function NewContact(props) {

    function handleChange(e) {
      
        props.setList((prevState) => ({
          ...prevState,
          newContact: {
            ...prevState.newContact,
            [e.target.name]: e.target.value, 
            [e.target.email]: e.target.value, 
            [e.target.website]: e.target.value, 
            [e.target.number]: e.target.value, 
          } 
        })) 
      }

      

async function addOne(e) {
    if (!props.list.user) return;
    e.preventDefault()
    const BASE_URL = `http://localhost:3001/api/contacts`;
    
    function addContact(){
      return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({...props.list.newContact, uid: props.list.user.uid})
      }).then(res => res.json())
    }

    function updateContact() {
      const { name, email, website, number, _id} = props.list.newContact
      return fetch(`${BASE_URL}/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify({ name, email, website, number, _id} )
      }).then(res => res.json());
    }
    
    if(!props.list.editMode) {
      const contact = await addContact();
      console.log(contact)
      props.setList((prevState) => ({
        ...prevState,
        contacts: [...prevState.contacts, contact],
        newContact: {
            name: "", 
            email: "", 
            website: "", 
            number: "",
          },
    }));
    } else {
      const updatedContacts = await updateContact();
      console.log({updatedContacts})
      props.setList((prevState) => ({
        ...prevState,
        contacts: updatedContacts,
        newContact: {
            name: "", 
            email: "", 
            website: "", 
            number: "",
          },
          editMode: false,
        }));
    }
}

async function handleDelete(id) {
  console.log(id)
  if (!props.list.user) return;
  const URL = `http://localhost:3001/api/contacts/${id}`;
  
  const contacts = await fetch(URL, {
    method: 'DELETE'
  }).then(res => res.json());

  props.setList(prevState => ({
    ...prevState,
    contacts,
  }))
}

    return(       
      <tr>
                  <form action="" className="NewContact" onSubmit={addOne} id="form"/>
                      <td>
                        <input name="name" value={props.list.newContact.name} type="text"  className={styles.input}form="form" onChange={handleChange} />
                      </td>
                   
                      <td>

                        <input name="email" value={props.list.newContact.email}type="email" className={styles.input} form="form" onChange={handleChange} />
                      </td>
                    
                   <td>
                        <input name="website" value={props.list.newContact.website}type="text" name="website" id="" className={styles.input} form="form" onChange={handleChange} />
                   </td>
                    
                   <td>
                        <input value={props.list.newContact.number}type="text" name="number" id="" className={styles.input} form="form" onChange={handleChange} />
                   </td>
                   <td></td>
                    <td>
                    {!props.list.editMode ?
                   <button type="submit" form="form">Add</button> 
                   : <><button type="submit" form="form">Update</button><button onClick={() => handleDelete(props.list.newContact._id)}>❌</button></>
                   
                    }
                    </td>
               
                </tr>
           
    )
    
   }
   
   export default NewContact;
   