const express = require('express');
const router = express.Router();
let feedback = [{q1: 3, q2: 3, q3: 3, q4: 'testing'}];

router.get('/', (req, res) => {
    res.send(feedback);
});

router.post('/', (req, res) => {
    console.log('in router.post', req.body);
    feedback.push(req.body);
    res.sendStatus(201);
});

router.delete('/', (req, res) => {
    console.log('in router.delete', feedback);
    feedback = [];
    res.sendStatus(200);    
});

module.exports = router;