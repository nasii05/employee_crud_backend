const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.model.js');
const { generateCrudMethods } = require('../services/index.js');
const employeecrud = generateCrudMethods(Employee);
const { validateDbId, raiseRecord404Error } = require('../middlewares/index.js');


router.get('/', (req, res, next) => {
    employeecrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err));
});

router.get('/:id', validateDbId, (req, res, next) => {
    employeecrud.getById(req.params.id)
        .then(data => {
            if (data)
                res.send(data)
            else
                raiseRecord404Error(req, res)
        })
        .catch(err => next(err));
});

router.post('/', (req, res, next) => {
    employeecrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err));
});

router.put('/:id', validateDbId, (req, res) => {
    
})

router.delete('/:id', validateDbId, (req, res) => {

})


module.exports = router;