const Routine = require('../models/routines');

const routinesController = {
    index: async (req, res)=>{
        const routines = await Routine.find(); 
        const exercises = await Exercise.find();  
        res.render('routines/index', {
            routines: routines,
            exercises: exercises
        })
    },
}