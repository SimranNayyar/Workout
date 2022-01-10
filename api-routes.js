// Filename: api-routes.js

// Initialize express router
let router = require('express').Router();
let funcs = require('./mongo.js')

// Set default API response

router.get('/hello', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome dis da default!'
    });
});

router.get('/getWorkoutHistory', async (req, res) => { 
    const workouts = await funcs.getWorkoutHistory()
    res.json(workouts)
})

router.post('/insertWorkout', async (req, res) => { 
    const workouts = await funcs.insertWorkout(req.body)
    res.json(workouts)
})



module.exports = router;