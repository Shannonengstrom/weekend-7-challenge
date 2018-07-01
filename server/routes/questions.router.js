const express = require('express');
const router = express.Router();
let questions = [{q1: 3, q2: 3, q3: 3, q4: 3}];

router.get('/', (req, res) => {
    res.send(questions);
});

router.post('/', (req, res) => {
    console.log('in router.post', req.body);
    questions.push(req.body);
    res.sendStatus(201);
});

router.delete('/', (req, res) => {
    console.log('in router.delete', questions);
    questions = [];
    res.sendStatus(200);    
});

module.exports = router;