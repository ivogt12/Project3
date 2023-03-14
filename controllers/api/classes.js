const Class = require('../../models/class');
const Student = require('../../models/student');
const Assignment = require('../../models/assignment');

module.exports = {
    setId,
    index,
    getStudents,
    create,
    createstu,
    createAss
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
    // const check = await Class.checkUser(req.user._id)
    // console.log(check)
    await newClass.save()
    res.json(newClass);
};

async function createstu(req, res) {
    let stuObj = req.body.newStudent

    const student = new Student(stuObj)

    student.user = req.user._id

    // const check = await Student.checkUser(student._id)
//    const add = await Student.addStudent(check, stuObj)
//    console.log(add)
    
    // const matchedClass = await Class.findOne({name: req.body.newStudent.classroom})
    // console.log(matchedClass)
    // matchedClass.students.push(student)
    // // matchedClass.teacher.push(req.user._id)
    // matchedClass.save()
    student.save()
    res.json(student)
};

async function createAss(req, res) {
    const getClass = await Class.findById(req.params.classId)
    // console.log(getClass)
    const assignment = new Assignment(req.body.assignment)
    // console.log(assignment)
    assignment.teacher = req.user._id

    getClass.assignments.push(assignment);
    assignment.save()
    getClass.save()
    console.log(getClass)
    res.json(assignment)
}
