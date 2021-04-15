

const BASE_URL = `https://followupbackend.herokuapp.com/api/contacts`;

export function getContacts(uid) {
    return fetch(`${BASE_URL}?uid=${uid}`).then(res => res.json());
}

