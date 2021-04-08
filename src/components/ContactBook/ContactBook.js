import Contact from '../Contact/Contact'

function ContactBook(props) {
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
                <Contact />
            </table>
        </div>
    )
}

export default ContactBook;