import styles from '../NewContact/NewContact.module.css';

import { addContact } from '../../services/database'

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
    const contact = await addContact(props.list.newContact, props.list.user);
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

                   <button type="submit" form="form">Add</button> 
                    </td>
               
                </tr>
           
    )
    
   }
   
   export default NewContact;
   