const Class = require('../../models/class');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const classes = await Class.find({});
    res.json(classes)
};

async function create(req, res) {
    const newClass = new Class(req.body.newClass);
    await newClass.save()
    res.json(newClass);
};
