import '../Contact/Contact.css'

function Contact(props) {

 return(
        <tr>
            <td><p>{props.contact.name}</p></td>
            <td><p>{props.contact.email}</p></td>
            <td><p>{props.contact.website}</p></td>
            <td><p>{props.contact.number}</p></td>
            <td><p>Never</p></td>
            <td>
                <button type="submit">Contacted</button>
                <button type="submit">Edit</button>
            </td>
        </tr>
 )

}

export default Contact;
