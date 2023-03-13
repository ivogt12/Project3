import sendRequest from './send-request';
const BASE_URL = '/api/students';

export async function getMyStudents() {
    return sendRequest(BASE_URL)
};

export async function createGrade(studentGrade) {
    return sendRequest(`${BASE_URL}/create`, 'POST', {studentGrade});
};