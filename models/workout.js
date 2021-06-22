const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
      type: Date,
      default: () => new Date()
    },
    exercises:[
        {
            type:{
             type: String,
             required: "Need to have a workout"
            },
            name:{
                type: String,
                required: "Name of workout"
            }, 
            duration: {
                type: Number,
                required: "Duration of workout"
            },
            weight: {
               type: Number
            },
            reps: {
                type: Number
            },
            sets: { 
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ],  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;