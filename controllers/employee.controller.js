const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const Employee = require('../models/employee.model.js');

router.get('/', (req, res) => {
    Employee.find()
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    if (objectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: 'no recode with given _id' + req.params.id
        })
    else
        Employee.findById(req.params.id)
            .then(data => {
                if (data)
                    res.send(data)
                else
                    res.status(404).json({
                        error: 'no recode with given _id' + req.params.id
                    })
            })
            .catch(err => console.log(err));
});


router.post('/', (req, res) => {
    Employee.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => console.log(err));
});



module.exports = router;