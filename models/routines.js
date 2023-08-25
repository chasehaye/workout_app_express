const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    name: String,
})

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine; 