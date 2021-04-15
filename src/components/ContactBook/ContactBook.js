import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact';

function ContactBook({list, setList}) {

    function addMode() {
        setList(prevState => ({
            ...prevState,
            addMode: true,
        }))
    }

    
if (list.contacts) {
    return (
        <div className="ContactBook">
            Contact Book
            <table className="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                    <th>Last Contacted </th>
                </tr>
                {list.contacts.map((contact, idx) =>
                (<Contact key={idx} contact={contact} list={list} setList={setList}/>
                ))}
                
                {!list.editMode && list.addMode ?
                <NewContact setList={setList} list={list} /> : !list.editMode ?
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <button onClick={addMode} className="btn btn-dark btn-sm">Add Contact</button>
                    </td>
                </tr> :""
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