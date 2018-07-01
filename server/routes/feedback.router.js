const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
    res.send(feedback);
});

router.post('/', (req, res) => {
    console.log('in router.post', req.body);
    const feedback = req.body;
    const queryText = `INSERT INTO "feedback" ("q1", "q2", "q3", "q4")
    VALUES ($1, $2, $3, $4)`;
    const queryValues = [feedback.q1, feedback.q2, 
                        feedback.q3, feedback.q4 ];
    pool.query(queryText, queryValues).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST /api/feedback', error);
        res.sendStatus(500);
    });
});


router.delete('/', (req, res) => {
    console.log('in router.delete', feedback);
    feedback = [];
    res.sendStatus(200);    
});

module.exports = router;