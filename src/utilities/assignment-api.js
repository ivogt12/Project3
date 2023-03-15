import sendRequest from "./send-request";
const BASE_URL = '/api/assignments';

export async function newAssGrade(assignmentId, class_) {
    return sendRequest(`${BASE_URL}/create/${assignmentId}`, 'POST', {class_});
};

export async function getStudents(classId) {
    return sendRequest(`${BASE_URL}/${classId}`);
};