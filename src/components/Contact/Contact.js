import '../Contact/Contact.css'
import NewContact from '../NewContact/NewContact';


function Contact(props) {

    function handleEdited(contactId) { 
        const { name, email, website, number, _id, lastContacted} =  props.list.contacts.find(contact => contact._id === contactId);
        props.setList(prevState => ({
            ...prevState,
            newContact: {
                name,
                email,
                website,
                number,
                _id,
                lastContacted,
            },
            editMode: true,
        }))
    }

    let rawdate = new Date(props.contact.lastContacted)
    let hour = rawdate.getHours();
    let minute = rawdate.getMinutes()
    let TOD;
    if (hour > 12) {
        hour = hour - 12
        TOD = "PM"
    } else {
        TOD = "AM"
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
  let date = `${rawdate.getMonth() + 1}/${rawdate.getDate()}/${rawdate.getFullYear()} ${hour}:${minute} ${TOD}`

  let now = new Date()

  let minutesAgo = parseInt((now.getTime() - rawdate.getTime()) / 60000)

    let since;
    if (minutesAgo >= 1440) {
        since = `${parseInt(minutesAgo / 1440)} dys ago` 
    } else if (minutesAgo >= 60) {
        since = `${parseInt(minutesAgo / 60)} hrs ago`
    } else {
        since = `${minutesAgo} min ago`
    }    

 return(
        <>
            {props.list.newContact._id === props.contact._id ? <NewContact setList={props.setList} list={props.list} />: 
            <tr>
            <td><p>{props.contact.name}</p></td>
            <td><p>{props.contact.email}</p></td>
            <td><p>{props.contact.website}</p></td>
            <td><p>{props.contact.number}</p></td>
            <td><p>{since}</p></td>
            {!props.list.editMode ?
                <td>
                <button type="submit" onClick={() => handleEdited(props.contact._id)}>Edit</button>
                

                </td> : ""
            }
            </tr>
        }
            
        </>

 )

}

export default Contact;
