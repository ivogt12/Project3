const Class = require('../../models/class');
const Student = require('../../models/student');
const Assignment = require('../../models/assignment');

module.exports = {
    setId,
    index,
    getStudents,
    create,
    createstu,
    createAss,
    getAss,
    deleteClass,
    editClass
};

async function setId(req, res) {

    // console.log(req.params.newStu, req.user._id)

    // const check = Student.checkUser(req.params.newStu, req.user._id)
    // console.log(check)


    // const students = await Class.sendStu(req.user._id)
    
    // const eachStudent = await Student.myStudents(students)
    // console.log(eachStudent)
    // res.json(student)
};

async function index(req, res) {
    const classes = await Class.find({});
    res.json(classes)
};

async function getStudents(req, res) {
    const students = await Student.getStudents(req.params.userId)
    res.json(students)
}

async function create(req, res) {
    const newClass = new Class(req.body.newClass);
    await newClass.save()
    res.json(newClass);
};

async function createstu(req, res) {
    let stuObj = req.body.newStudent
    const student = new Student(stuObj)

    const class_ = await Class.find({name: req.body.newStudent.classroom})

    student.classroom = class_[0]._id
    class_[0].students.push(student._id)
    student.user = req.user._id
    class_[0].save()
    await student.save()
    res.json(student)
};

async function createAss(req, res) {
    const assignment = new Assignment(req.body.assignment)
    assignment.teacher = req.user._id
    assignment.class = req.params.classId;
    assignment.save()
    res.json(assignment)
};

async function getAss(req, res) {
    const whichClass = await Class.findById(req.params.classId)
    const assignments = await Assignment.find({teacher: req.params.userId});
    res.json(assignments)
};

async function deleteClass(req, res) {
    await Class.deleteOne({_id: req.body.classId})

}

async function editClass(req, res) {
    const getClass = await Class.findById(req.params.id)
    getClass.name = req.body.newClass.name
    getClass.subject = req.body.newClass.subject
    getClass.size = req.body.newClass.size
    getClass.save()
    console.log(getClass)
    res.json(getClass)
}
