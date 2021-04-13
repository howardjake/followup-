

const BASE_URL = `http://localhost:3001/api/contacts`;

export function getContacts(uid) {
    return fetch(`${BASE_URL}?uid=${uid}`).then(res => res.json());
}

