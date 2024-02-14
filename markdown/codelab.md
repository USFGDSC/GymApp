summary: USF GDSC Spring 2024 React.js GymApp Workshop
id: docs

# USF GDSC Spring 2024 React.js GymApp Workshop

## Introduction

We're gonna make a web application in React.js and TailWind called GymApp. In the app, we will be able to add, delete workouts that we did and store them in the local storage.

Please refer to this Codelab as you listen to the Tech Leads. If you have any trouble or cannot keep up, you can copy paste the code from each step or ask the supporting Tech Leads for help. Additionally, on each step there are comments in the code, so you can see where the new things got added.

React.js, commonly referred to as React, is an open-source JavaScript library developed and maintained by Facebook. It's widely used for building user interfaces (UIs) for web applications. React.js allows developers to create reusable UI components that can efficiently update and render when the data changes.

Tailwind is a CSS framework that aims to simplify the process of building responsive and customizable user interfaces for web applications. Unlike traditional CSS frameworks like Bootstrap or Foundation, which provide pre-designed components and styles, Tailwind CSS provides a set of utility classes that developers can use to style their HTML elements directly.

In other words, today instead of using HTML, CSS, and JavaScript, commonly used for website development, we will use React.js and TailWind.

**Important*
1. Please make you account on codesandbox.io.
2. Please go to this link [The set up code](https://codesandbox.io/p/devbox/xy7fzk?file=%2Fsrc%2FApp.tsx).
3. Fork the project by clicking the "Fork" Button on the top right
4. Follow along in the App.jsx file in the src folder

After the workshop, if you are intersted to install everything locally on your computer check out:
1. [Install Node.js](https://nodejs.org/en/download)
2. [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
3. [Setting up Tailwind and React and Vite](https://tailwindcss.com/docs/guides/vite)

Picture of the ready app.

<img src="docs\img\readyapp.jpg" width="900">

## General Layout

Let's develop the general layout of the app. To do so, we will make a function App.
We will use a tag from HTML called ```<div></div>``` to define the structural blocks out app will consist of such as "Details" and "Workout".

Moreover, we will add to them property className, which allows us to define styles using TailWind.

Some styles explained:
- h-screen sets the height of that div block as the height of the laptop screen used
- p-3 sets padding as 3, meaning that our div block will have a space around it of the size 3. Similarly, p-4 sets the space around of the size 4.
- flex sets a layout model that provides a more efficient way to arrange, distribute, and align elements within a container.
- flex-row states that blocks inside of the div will be in a one line (a row)
- justify-around sets the space between the blocks inside of the div
- bg-gray-200 sets the background as gray of the light shade

The result should look like a grey page with the "Details" on the left and "Add workout" on the right.

<img src="docs\img\general_layout.jpg" width="900">

Code we just made:
App.jsx
```javascript
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">Details</div>

      <div className="p-4 flex flex-col">Add workout</div>
    </div>
  );
};

export default App;

```

## Define empty functions and state

Now let's define our future functions and states (variables) where we will store our information such as 1. the workouts we already have and 2. information that is currently inputed by the user in our form.

Let's take a look at what setState is using the example from the code const [workouts, setWorkouts] = useState([]); . This line of code declares a state variable named workouts and a function named setWorkouts to update this state variable value. The initial state (variable) of workouts is an empty array. Later in the component's code, you can use workouts to access the current state variable value and setWorkouts to update it. To simplify, state is just a kind of a variable used in React.js that tells the component, particularly App, that it needs to keep track of this variable workouts and sometimes it will be updated.

Moreover, React.js uses arrow functions from JavaScript, which look like this const handleChange = (e) => {}; all it means is that handleChange is the name of the function and it takes an argument "e".

Lastly, emtyInput variable stores the object (dict if you are familiar with python) that shows what keys and values the form has before a person inputed anything.

To visualize, what stores what, here is a picture.

<img src="docs\img\what_stores_what_step_2.jpg" width="900">

App.jsx
```javascript
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  /* New code starts */
  const [workouts, setWorkouts] = useState([]);

  const emptyInput = {
    title: "",
    reps: "",
    load: "",
  };

  const [inputValues, setInputValues] = useState(emptyInput);

  const handleChange = (e) => {};

  const handleSubmit = () => {};

  const handleDelete = (index) => {};

  /* New code ends */

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">Details</div>

      <div className="p-4 flex flex-col">Add workout</div>
    </div>
  );
};

export default App;
```

## Add Frontend (UI) for the form

Instead of the words "Add workout", add the code below which will make the UI of the form.

If you are confused what each word does, please refer to the explanation below:

Here we get introduced to 3 more HTML tags:
- ```<p></p>``` acts similar to div, defining a component but is usually used as a paragraph (text)
- ```<input />``` creates an input window for the form
  - placeholder sets the text in the input
  - type sets the type of data user can input
  - onChange calls the function when input gets changed
  - name when data from the form gets into an object (dict), the name becomes its key
  - value sets where to store what is being inputed
  - min sets minimum possible value a user can input
- ```<button></button>``` creates the clicable button

New TailWind styles:
- font-bold sets the text as bold
- mb-3 sets the space on the bottom of the block, outside of its border
- rounded-md sets the border of the element as middle rounded
- text-white sets the color of the text as white
- py-2 and px-4 make pudding, but py allows to control Y-axis while p-x allows to control X-axis

<img src="docs\img\add_form_results_ui.jpg" width="900">

App.jsx
```javascript
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const emptyInput = {
    title: "",
    reps: "",
    load: "",
  };

  const [inputValues, setInputValues] = useState(emptyInput);

  const handleChange = (e) => {};

  const handleSubmit = () => {};

  const handleDelete = (index) => {};

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">Details</div>

      <div className="p-4 flex flex-col">
        /* New code for the Add Workout Starts */
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
        /* New code for the Add Workout ends */
      </div>
    </div>
  );
};

export default App;
```

## Add Frontend for the Workout Details

Let's add UI for our Workout details, which are displayed when we click on "Add Workout". Right now our functions are not ready, so you will not see any difference on the screen. It is okay.

At this point, everything we added you have met in previous steps besides:
- workouts.map(() => ()) is a smart React.js way to make a for loop that for every workout that we have in the workouts will make its own HTML tags, so we only need to write them for one workout and not all of them
- text-xl sets the text size as large

App.jsx
```dart
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const emptyInput = {
    title: "",
    reps: "",
    load: "",
  };

  const [inputValues, setInputValues] = useState(emptyInput);

  const handleChange = (e) => {};

  const handleSubmit = () => {};

  const handleDelete = (index) => {};

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">
      /* New code for the Details Starts */
        {workouts.map((workout, index) => (
          <div key={index} className="p-4 bg-white mb-4">
            <p className="text-xl text-green-600 font-bold">{workout.title}</p>
            <p>Load: {workout.load} lbs</p>
            <p>Reps: {workout.reps}</p>
          </div>
        ))}
      /* New code for the Details ends */
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

```

## Finish functions handleChange and handleSubmit

Let's finish the function handleChange gets called when a user changes value in any of the inputs. It takes what is stored in the target input, splits it into the name of the input and its value, and finally updates what is currently inputed in the form with old data plus new data in the certain input where it got changed.

The function handleSubmit gets called when we press "Add Workout" button. It takes the previous workouts we had and adds to them the new workout we just inputed. Lastly, since it added the inputed workouts, it clears out the form to make the inputs in it empty.

Now, try to fill out the form and thew workouts should start appearing on the left.

<img src="docs\img\handleSubmit.jpg" width="900">

App.jsx
```javascript
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const emptyInput = {
    title: "",
    reps: "",
    load: "",
  };

  const [inputValues, setInputValues] = useState(emptyInput);

  /* new code starts */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = () => {
    const newWorkouts = [...workouts, inputValues];
    setWorkouts(newWorkouts);
    setInputValues(emptyInput);
  };

  /* new code ends */

  const handleDelete = (index) => {};

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">
        {workouts.map((workout, index) => (
          <div key={index} className="p-4 bg-white mb-4">
            <p className="text-xl text-green-600 font-bold">{workout.title}</p>
            <p>Load: {workout.load} lbs</p>
            <p>Reps: {workout.reps}</p>
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
```

## Bonus step: implement handleDelete function

Let's add a button "Delete", which when pressed will delete the workout from our list. To achieve that, under the reps that we show in the workout details, we will add a button. Also, we will add code to our handleDelete function that was created earlier. All the function does is it takes our workouts, finds with the splice function the location of the workout we want to delete, deletes it and then sets the workouts as the new array.

<img src="docs\img\readyapp.jpg" width="900">

App.jsx
```javascript
// Dependencies
import React from "react";
import { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

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
    setInputValues(emptyInput);
  };

  /* new code starts */
  const handleDelete = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };
  /* new code ends */

  return (
    <div className="h-screen p-3 flex flex-row justify-around bg-gray-200">
      <div className="w-2/3">
        {workouts.map((workout, index) => (
          <div key={index} className="p-4 bg-white mb-4">
            <p className="text-xl text-green-600 font-bold">{workout.title}</p>
            <p>Load: {workout.load} lbs</p>
            <p>Reps: {workout.reps}</p>
            /* new code starts */
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-md mt-3"
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
            /* new code ends */
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
```

## Bonus step: store workouts in local storage

localStorage is a feature in web browsers that allows web applications to store data locally within the user's browser. It provides a simple key-value store, similar to cookies, but with a larger storage capacity and better security. In simple words, if you store something in localStorage, if you reload your web applications, that data is still saved. However, if you go to the web application in another browser or computer, it will not be saved.

To add this functionality, we need to load our workouts from the localStorage when the user opens the page, save the workouts in the localStorage when handleSubmit function is called and save the updated workouts when handleDelete function is called.

App.jsx
```javascript
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
```

## Conclusion

Good job.