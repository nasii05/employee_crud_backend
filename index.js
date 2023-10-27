const express = require('express');
const bodyparser = require('body-parser');

// local imports
const connnectDb = require('./db.js');
const employeeRoutes = require('./controllers/employee.controller.js');
const staffRoutes = require('./controllers/staff.controller.js');
const {errorHandler} = require('./middlewares/index.js');

const app = express();

// middlewares
app.use(bodyparser.json())
app.use('/api/employees', employeeRoutes);
app.use('/api/staffs', staffRoutes);
app.use(errorHandler)


connnectDb()
    .then(() => {
        console.log('db connected');
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });        
    })
    .catch(err => console.log(err));