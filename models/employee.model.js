const mongooose = require('mongoose');

module.exports =  mongooose.model('Employee', {
    fullName: {type: String},
    position: {type: String},
    location: {type: String},
    salary: {type: String},
});