import '../Contact/Contact.css'
import NewContact from '../NewContact/NewContact';


function Contact(props) {

    function handleEdited(contactId) { 
        const { name, email, website, number, _id} =  props.list.contacts.find(contact => contact._id === contactId);
        props.setList(prevState => ({
            ...prevState,
            newContact: {
                name,
                email,
                website,
                number,
                _id,
            },
            editMode: true,
        }))
    }

  


 return(
        <>
            {props.list.newContact._id === props.contact._id ? <NewContact setList={props.setList} list={props.list} />: 
            <tr>
            <td><p>{props.contact.name}</p></td>
            <td><p>{props.contact.email}</p></td>
            <td><p>{props.contact.website}</p></td>
            <td><p>{props.contact.number}</p></td>
            <td><p>Never</p></td>
            {!props.list.editMode ?
                <td>
                <button type="submit" >Contacted</button>
                <button type="submit" onClick={() => handleEdited(props.contact._id)}>Edit</button>
                

                </td> : ""
            }
            </tr>
        }
            
        </>

 )

}

export default Contact;
