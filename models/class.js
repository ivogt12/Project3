const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const classSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', },
    name: { type: String},
    subject: { type: String},
    size: { type: Number},
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    
});

classSchema.statics.checkUser = function(userId) {
    return this.findOneAndUpdate(
        {user: userId},
        {user: userId},
        {upsert: true, new: true}
    )
}


classSchema.statics.sendStu = function (teacherId){
    return this.find({teacher: teacherId})
}

module.exports = mongoose.model('Class', classSchema);