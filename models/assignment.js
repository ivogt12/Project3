const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    teacher: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String},
    date: {type: Date}
});


module.exports = mongoose.model('Assignment', assignmentSchema);