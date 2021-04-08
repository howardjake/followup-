import styles from '../NewContact/NewContact.module.css';

function NewContact() {

    return(
           <div className={styles.addPage}>
               <h3>Add a new Contact</h3>
               <form action=""className="NewContact">
                   <label htmlFor="">
                        Name
                        <input type="text" className={styles.input} />
                    </label>
                   <label htmlFor="">
                        Email
                        <input type="email" className={styles.input}/>
                    </label>
                   <label htmlFor="">
                        Website
                        <input type="number" name="" id="" className={styles.input}/>
                    </label>
                   <label htmlFor="">
                        Number
                        <input type="phone" name="" id="" className={styles.input}/>
                    </label>
                   <button type="submit">Add Contact</button>
               </form>
           </div>
    )
    
   }
   
   export default NewContact;
   