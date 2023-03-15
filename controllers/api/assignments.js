const Class = require('../../models/class');
const Student = require('../../models/student');
const Assignment = require('../../models/assignment');

module.exports = {
    create,
    getStudents
};

async function create(req, res) {
    const assignment = await Assignment.findById(req.body.assignmentId);
    console.log(req.params)


};

async function getStudents(req, res) {
    const stuClass = await Class.findById(req.params.classId);
    const students = await Class.find({})
    
}