import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact';

function ContactBook({list, setList}) {

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
                (<Contact key={idx} contact={contact} />
                ))}
                <NewContact setList={setList} list={list} />
            </table>
        </div>
    )
}

export default ContactBook;