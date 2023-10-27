const mongoose = require('mongoose');

module.exports = mongoose.model('Staffs', {
    fullName: {type: String},
    position: {type: String},
    location: {type: String},
    salary: {type: String},
})