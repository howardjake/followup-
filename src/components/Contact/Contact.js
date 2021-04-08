import '../Contact/Contact.css'

function Contact(props) {

    console.log(props.contact)

 return(
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.website}</td>
            <td>{props.contact.number}</td>
            <td>Never</td>
            <button type="submit">Contacted</button>
            <button type="submit">Edit</button>
        </tr>
 )

}

export default Contact;
