import Contact from '../Contact/Contact'

function ContactBook({list}) {

    console.log(list)
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
                (<Contact contact={contact} />
                ))}
            </table>
        </div>
    )
}

export default ContactBook;