const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercise: [
        {
            type: {
                type: String,
                required: 'Enter type of workout'
            },
            name: {
                type: String,
                required: 'Enter name of workout'
            },
            duration: {
                type: Number,
                required: 'Enter duration of workout'
            },
            weight: {
                type: Number,
                required: 'Enter weight of workout'
            },
            distance: {
                type: Number,
                required: 'Enter distance of workout'
            },
            sets: {
                type: Number,
                required: 'Enter number of sets'
            },
            reps: {
                type: Number,
                required: 'Enter number of reps'
            },
        }
    ],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;