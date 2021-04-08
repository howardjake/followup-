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

function addContact(e) {
    e.preventDefault()
    props.setList((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts, prevState.newContact],
      newContact: {
          name: "", 
          email: "", 
          website: "", 
          number: "",
        },
  }));
}

    return(
           <div className={styles.addPage}>
                <h3>Add a new Contact</h3>
               <form action="" className="NewContact" onSubmit={addContact}>
                   <label htmlFor="">
                        Name
                        <input name="name" value={props.list.newContact.name} type="text"  className={styles.input} onChange={handleChange} />
                    </label>
                   <label htmlFor="">
                        Email 
                        <input name="email" value={props.list.newContact.email}type="email" className={styles.input} onChange={handleChange} />
                    </label>
                   <label htmlFor="">
                        Website
                        <input name="website" value={props.list.newContact.website}type="text" name="website" id="" className={styles.input} onChange={handleChange} />
                    </label>
                   <label htmlFor="">
                        Number
                        <input value={props.list.newContact.number}type="text" name="number" id="" className={styles.input} onChange={handleChange} />
                    </label>
                   <button type="submit">Add Contact</button> 
               </form>
           </div>
    )
    
   }
   
   export default NewContact;
   