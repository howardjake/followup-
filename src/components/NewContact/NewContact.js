import styles from '../NewContact/NewContact.module.css';
import React from "react";



function NewContact(props) {

    function handleChange(e) {
      
        props.setList((prevState) => ({
          ...prevState,
          newContact: {
            ...prevState.newContact,
            [e.target.name]: e.target.value,
          } 

        })) 
      }

      

async function addOne(e) {
    if (!props.list.user) return;
    e.preventDefault()
    const BASE_URL = "https://followupbackend.herokuapp.com/api/contacts/";
    
    function addContact(){
      const { name, email, website, number, lastContacted } = props.list.newContact
      const uid  = props.list.user.uid
      return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          "Content-type" : "Application/json"
        },
        body: JSON.stringify({name, email, website, number, uid, lastContacted})
      }).then(res => res.json())
      
    }

    function updateContact() {
      const { name, email, website, number, _id, lastContacted} = props.list.newContact;
      return fetch(`${BASE_URL}/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify({ name, email, website, number, _id, lastContacted} )
      }).then(res => res.json());
    }
    
    if(!props.list.editMode) {
      const contacts = await addContact();
      props.setList((prevState) => ({
        ...prevState,
        contacts,
        newContact: {
            name: "", 
            email: "", 
            website: "", 
            number: "",
            _id: ""
          },
          editMode: false,
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
  const URL = `https://followupbackend.herokuapp.com/api/contacts/${id}`;
  
  const contacts = await fetch(URL, {
    method: 'DELETE'
  }).then(res => res.json());

  props.setList(prevState => ({
    ...prevState,
    contacts,
    newContact: {
      name: "", 
      email: "", 
      website: "", 
      number: "",
    },
    editMode: false,
    }))
  }

    function handleCancel() {
      props.setList(prevState => ({
          ...prevState,
          addMode: false,
          editMode: false,
          newContact: {
            name: "", 
            email: "", 
            website: "", 
            number: "",
            _id: ""
          },
          
      }))
    }

    let now = new Date()

    function handleContacted(id){
      props.setList((prevState) => ({
        ...prevState,
        newContact: {
          ...prevState.newContact,
          lastContacted: now,
        } 
      })) 
    }


    let rawdate = new Date(props.list.newContact.lastContacted);
    let hour = rawdate.getHours();
    let minute = rawdate.getMinutes()
    let TOD;
    if (hour > 12) {
        hour = hour - 12
        TOD = "PM"
    } else {
        TOD = "AM"
        if (hour === 0) {
          hour = hour + 12
        }
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    let oldDate = `${rawdate.getMonth() + 1}/${rawdate.getDate()}/${rawdate.getFullYear()} ${hour}:${minute} ${TOD}`;

    if (oldDate === `NaN/NaN/NaN NaN:NaN AM`){
          oldDate = `Never`
    }
    

    return(   
          
      <tr>
                  <form action="" className="NewContact" onSubmit={addOne} id="form"/>
                      <td>
                        <input autoFocus name="name" value={props.list.newContact.name} type="text"  className={styles.input + ' form-control'} form="form" onChange={handleChange} required/>
                      </td>
                   
                      <td>

                        <input name="email" value={props.list.newContact.email}type="email" className={styles.input + ' form-control'} form="form" onChange={handleChange} />
                      </td>
                    
                   <td>
                        <input name="website" value={props.list.newContact.website}type="text" className={styles.input + ' form-control'} form="form" onChange={handleChange} />
                   </td>
                    
                   <td>
                        <input value={props.list.newContact.number} type="text" name="number" className={styles.input+  ' form-control'} form="form" onChange={handleChange} />
                   </td>
                   <td>
                     
                     <p>{props.list.editMode ? !props.list.addMode ? 
                     <>{oldDate}
                     <button onClick={() => handleContacted(props.list.newContact._id)} className="btn btn-success btn-sm">✓</button></> 
                     : <>{oldDate}
                     <button onClick={() => handleContacted(props.list.newContact._id)} className="btn btn-success btn-sm">✓</button></> : ""}</p>
                   </td>
                    <td>

                    {!props.list.editMode ?
                   <button type="submit" form="form" className="btn btn-primary btn-sm">Add</button> 
                   : <><button type="submit" form="form" className="btn btn-primary btn-sm">Update</button>
                   
                   <button onClick={() =>  {if(window.confirm('Are you sure want to delete this contact?')) handleDelete(props.list.newContact._id)}} className="btn btn-danger btn-sm">X</button>
                    </>
                   
                  }
                    <button onClick={handleCancel } className="btn btn-secondary btn-sm">Cancel</button>
                    
                  </td>
               
                </tr>
           
    )
    
   }
   
   export default NewContact;
   