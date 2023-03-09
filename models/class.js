const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    size: { type: Number, required: true }
});

module.exports = mongoose.model('Class_', classSchema);