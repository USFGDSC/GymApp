// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  /* Code change starts here */
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });
  /* Code change ends here */

  const emptyInput = {
    title: "",
    reps: "",
    load: "",
  };

  const [inputValues, setInputValues] = useState(emptyInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = () => {
    const newWorkouts = [...workouts, inputValues];
    setWorkouts(newWorkouts);
    /* The line below got added */
    localStorage.setItem("workouts", JSON.stringify(newWorkouts));
    setInputValues(emptyInput);
  };

  const handleDelete = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
    /* The line below got added */
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">
        {workouts.map((workout, index) => (
          <div key={index} className="p-4 bg-white mb-4">
            <p className="text-xl text-green-600 font-bold">{workout.title}</p>
            <p>Load: {workout.load} lbs</p>
            <p>Reps: {workout.reps}</p>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-md mt-3"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 flex flex-col">
        <p className="font-bold mb-3">Add a New Workout</p>
        <input
          placeholder="Exercise Name"
          type="text"
          onChange={handleChange}
          name="title"
          value={inputValues.title}
          className="p-1 mb-3 rounded-md"
        />
        <input
          placeholder="Load (in KG)"
          type="number"
          onChange={handleChange}
          name="load"
          value={inputValues.load}
          min="0"
          className="p-1 mb-3 rounded-md"
        />
        <input
          placeholder="Reps"
          type="number"
          onChange={handleChange}
          name="reps"
          value={inputValues.reps}
          min="0"
          className="p-1 mb-3 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-4 rounded-md"
        >
          Add Workout
        </button>
      </div>
    </div>
  );
};

export default App;