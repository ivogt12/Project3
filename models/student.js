const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String},
    classroom: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
});

studentSchema.statics.checkUser = function(userId) {
    return this.findOneAndUpdate(
        {user: userId},
        {user: userId},
        {upsert: true, new: true}
    )
}

studentSchema.statics.myStudents = async function(students) {
    students.forEach((student) => {
        
    const stu = this.findById(student._id)
    
    const stuArr = []
    return stu
    })}


module.exports = mongoose.model('Student', studentSchema);