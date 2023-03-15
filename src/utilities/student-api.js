import sendRequest from './send-request';
const BASE_URL = '/api/students';

export async function addGrade(studentId, grade){
    // console.log(studentId, grade)
    return sendRequest(`${BASE_URL}/${studentId}`, 'POST', {grade});
};

export async function getGrades(userId) {
    return sendRequest(`${BASE_URL}/grades/${userId}`);
};