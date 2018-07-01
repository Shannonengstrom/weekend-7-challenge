const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
    console.log('in router.get');
    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
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


router.delete('/:id', (req, res) => {
    console.log('in router.delete', req.params.id);
    const id = req.params.id;
    const queryText = `DELETE FROM feedback WHERE id=$1`;
    pool.query(queryText, [id])
        .then((result) => {
        console.log('successful delete from feedback', result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error deleting feedback', err);
        res.sendStatus(401);
    });
    res.sendStatus(200);    
});

module.exports = router;