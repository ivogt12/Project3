import sendRequest from './send-request';
const BASE_URL = '/api/classes';

export async function getAll() {
    return sendRequest(BASE_URL);
};

export async function create(newClass) {
    return sendRequest(`${BASE_URL}/create`, 'POST', {newClass})
};


