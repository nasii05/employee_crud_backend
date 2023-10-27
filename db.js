const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://nasih:nasih123@cluster0.salmmsm.mongodb.net/employee_db?retryWrites=true&w=majority';

mongoose.set('strictQuery',  false);

module.exports  = () => {
   return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   }) 
}