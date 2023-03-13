import sendRequest from './send-request';
const BASE_URL = '/api/classes';

export async function getAll() {
    return sendRequest(`${BASE_URL}/index`)
};

export async function getMyStudents() {
    console.log('j')
    return sendRequest(BASE_URL)
}

export async function create(newClass) {
    return sendRequest(`${BASE_URL}/create`, 'POST', {newClass})
};

export async function addStu(newStudent) {
    return sendRequest(`${BASE_URL}/addstu`, 'POST', {newStudent})
}


