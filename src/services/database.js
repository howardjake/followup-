

const BASE_URL = `http://localhost:3001/api/contacts`;

export function getContacts() {
    return fetch(BASE_URL).then(res => res.json());
}

export function addContact(data, user){
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify({...data, uid: user})
    }).then(res => res.json())
}