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
            },
            distance: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
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