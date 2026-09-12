# Dev Stack

Dev Stack is a modern, responsive web application designed to help developers seamlessly navigate through frontend, backend, database, and tooling options. By comparing different technologies side by side, you can curate and visualize the perfect architecture for your modern software builds.

### Technologies Used

* **React** (Featuring modern Hooks & Suspense)
* **TypeScript** (Strongly typed components and interfaces)
* **Tailwind CSS** (Utility-first styling and responsive design)
* **React Toastify** (Interactive user notifications)

### Key Features

1. **Curated Exploration:** Browse a comprehensive list of developer technologies categorized by stack type, difficulty level, and user ratings.
2. **Custom Stack Builder:** Interactively select, add, and remove specific tools to build your personalized project stack with real-time visual updates.
3. **Interactive & Responsive UI:** Experience a clean, minimal design equipped with instant visual feedback (via **toast** notifications) that looks great on both desktop and mobile devices.

### Some Common Questions
1. What is JSX, and why is it used in React? <br>
JSX file contain HTML and JavaScript. It helps render conditionally or use any javascript power in HTML. in .html file we can not write js in the middle of html. <br>
In React when conditional rendering or need to use any JS power in HTML JSX is the saviour. So in the end we can say it JSX is the Super Power of HTML file.
2. What is the difference between props and state? <br>
Props means properties of the function and state is the internal memoery of the components.
3. What does the useState hook do, and where did you use it in this project? <br>
useState is the internal memory of the component. It initailly hold the given value. useState use to change an element of the html without rerendering the whole page. It render only the changed portion of the html. For the change it instant. In this project useState play an important role. In TechStackCard usestate used to change **add to stack** button background colour. When it pressed it change the colour of the button. Technology component Your Stack div hold the selected stack list, when removing the selected stack list it change the add to stack to previous state and make the button clickable again.
4. What does the useEffect hook do, and why did you need it to load the JSON data?

5. Why does every item in a .map() list need a unique key prop? <br>
When rendering from a loop like map it requires a unique **key** to keep track of the component. So that when it need to change a state of the component it can find the component that need to change.
6. What is conditional rendering? Show one place you used it (example: the empty stack message). <br>
Conditional rendering is render a component via condition. Empty stack is use conditional rendering. When selectedStacks array is empty it shows the empty stack. If the array is not empty it map from the selectedstack array and render each stack.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? <br>
In React we can only send the data from the parent to child. It is not possible send data from child to parent component. When need share data from child to parent, need to declear variable in the parent then send it to child. child write data by calling function in the variable usesally set function.
