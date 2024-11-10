const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name:String,
    email:String,
    age : Number,
    result: { type: String, enum: ['Pass', 'Fail'], default: 'Fail' }
}
)

const studentsModel = mongoose.model("students", studentsSchema)
module.exports = studentsModel