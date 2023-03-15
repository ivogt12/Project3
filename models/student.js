const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    grade: {type: String},
    assignment:{type:Schema.Types.ObjectId, ref: 'Assignment'}
})

const studentSchema = new Schema({
    name: { type: String},
    classroom: {type: Schema.Types.ObjectId, ref: 'Class'},
    // classroom: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    grade: {type: String},
    assignments:[{type: Schema.Types.ObjectId, ref: 'Assignment'}],
    assignmentGrades: [gradeSchema]
});

studentSchema.statics.getStudents = function(userId) {
    return this.find(
        {user: userId},
    )
}

studentSchema.statics.checkUser = function(student ) {
    return this.findOneAndUpdate(
        {_id: student},
        {user: userId},
        {upsert: true, new: false}
    )
}

studentSchema.statics.addStudent = function(check, stuObj) {
    return this.find(
        {_id: check._id},
        {name: stuObj.name}
    )
}

module.exports = mongoose.model('Student', studentSchema);