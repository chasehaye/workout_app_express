const Routine = require('../models/routines');

const routinesController = {
    index: async (req, res)=>{
        try {
            const routines = await Routine.find(); 
                res.render('routines/index', {
                    routines: routines
            })
        }catch(err){
            res.send(err)
        }
    },
    new: async (req, res) => {
        try{ 
            res.render('routines/new', {
            })
        }catch(err){
            res.send(err)
        }
    },
    create: async (req, res) => {
        try{
            const newRoutine = await Routine.create(req.body);
            res.redirect('/routines')
        }catch(err){
            res.send(err)
        }
    },
    // show: async (req, res) => {
    //     const routine = await Routine.findById(req.params.id)
    //     const exercises = await Exercise.find(); 
    //     res.render('routines/show', {
    //         routine: routine, 
    //         exercises: exercises
    //     })
    // },
    // delete: async (req, res) => {
    //     try{
    //         const deletedRoutine = await Routine.findByIdAndDelete(req.params.id)
    //         res.redirect('/routines')
    //     }catch(err){
    //         res.send(err)
    //     }
    // },
    // edit: async (req, res) => {
    //     try{ 
    //         const routine = await Routine.findById(req.params.id)
    //         const exercises = await Exercise.find(); 
    //         res.render('routines/edit', {
    //         routine: routine,
    //         exercises: exercises
    //         })
    //     }catch(err){
    //         res.send(err)
    //     }
    // },
    // update: async (req, res) => {
    //     try{

    //     }catch(err){
    //         res.send(err)
    //     }
    // }
}

module.exports = routinesController