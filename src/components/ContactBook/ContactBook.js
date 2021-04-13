import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact';

function ContactBook({list, setList}) {

if (list.contacts) {
    return (
        <div className="ContactBook">
            Contact Book
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                    <th>Last Contacted</th>
                </tr>
                {list.contacts.map((contact, idx) =>
                (<Contact key={idx} contact={contact} list={list} setList={setList}/>
                ))}
                {!list.editMode ?
                <NewContact setList={setList} list={list} /> : ""
                }
            </table>
        </div>
    )
} else {
    return (

        <></>
    )
}
}

export default ContactBook;