const express = require('express');
const router = express.Router();

const staff = require('../models/staff.model.js');

router.get('/', (req, res) => {
    staff.find()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req, res)=>{
    staff.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

module.exports = router;