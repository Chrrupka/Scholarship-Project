import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const studentSchema = new Schema({
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'application', required: false, unique: true },
    name: { type: String, required: true},
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    album_id: { type: String, required: true },
    pesel: { type: String, required: true, unique: false, maxlength: 11 },
    phone_number: { type: Number },
    address: { type: String, required: true }
}, {
    collections: 'student'
});

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Student', studentSchema, 'student');
