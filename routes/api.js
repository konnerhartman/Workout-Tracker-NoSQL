const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", ({ body }, res) => {
  console.log('what is this?', body);
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  // console.log(body, params);
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration:
            { $sum: '$exercises.duration' },
        }
      }
    ])
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration:
          { $sum: '$exercises.duration' },
        totalWeight:
          { $sum: '$exercises.weight' }
      }
    }
  ])
    .sort({day:-1})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout.reverse());
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;