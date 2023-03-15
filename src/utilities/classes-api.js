import sendRequest from './send-request';
const BASE_URL = '/api/classes';

export async function getAll() {
    return sendRequest(`${BASE_URL}/index`)
};

export async function getStudents(userId) {
    return sendRequest(`${BASE_URL}/${userId}`)
};

export async function setId(newStu) {
    return sendRequest(`${BASE_URL}/id/${newStu}`)
}

export async function create(newClass) {
    return sendRequest(`${BASE_URL}/create`, 'POST', {newClass})
};

export async function addStu(newStudent) {
    return sendRequest(`${BASE_URL}/addstu`, 'POST', {newStudent})
}

export async function newAss(classId, assignment) {
    return sendRequest(`${BASE_URL}/createAss/${classId}`, 'POST', {assignment})
}

export async function getAss(userId, classId) {
    return sendRequest(`${BASE_URL}/assignments/${userId}/${classId}`)
};

export async function deleteClass(classId) {
    return sendRequest(`${BASE_URL}`, 'POST', {classId})
}

export async function edit(classId, newClass) {
    return sendRequest(`${BASE_URL}/edit/edit/${classId}`, 'POST', {newClass})
}


