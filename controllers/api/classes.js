const Class = require('../../models/class');
const Student = require('../../models/student');

module.exports = {
    getMyStudents,
    index,
    create,
    createstu
};

async function getMyStudents(req, res) {

    // const check = await Student.checkUser(req.user._id)
    // console.log(check)

    // const students = await Student.find({teacher: [req.user._id]})
    // console.log(students)

    // const students = await Class.sendStu(req.user._id)
    
    // const eachStudent = await Student.myStudents(students)
    // console.log(eachStudent)
    // res.json(student)
};

async function index(req, res) {
    const classes = await Class.find({});
    res.json(classes)
};

async function loadUser(req, res) {
    const check = await Class.checkUser()
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
    
    const matchedClass = await Class.findOne({name: req.body.newStudent.classroom})

    matchedClass.students.push(student)
    // matchedClass.teacher.push(req.user._id)
    matchedClass.save()
    student.save()


    

    
    res.json(matchedClass.students)
};
