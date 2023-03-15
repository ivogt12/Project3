const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const classSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', },
    name: { type: String},
    subject: { type: String},
    size: { type: Number},
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    assignments: [{type: Schema.Types.ObjectId, ref:'Assignment'}]
    
});

classSchema.statics.getStudents = function() {
    return
}


module.exports = mongoose.model('Class', classSchema);