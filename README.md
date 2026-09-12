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
1. *What is JSX, and why is it used in React?* <br>
JSX is basically HTML with JavaScript added to it. It allows us to write JavaScript logic right in HTML. In a typical .html file we cannot write JS directly in the middle of the HTML tags but in React, JSX helps for this. JSX handles if conditional rendering or use JS inside HTML. So, JSX as giving an HTML file superpowers.

2. *What is the difference between props and state?* <br>
Props (full form properties) are data passed to a component like function. State is the internal memory of a component. It contains data that is specific to that component and can change over time.

3. *What does the useState hook do, and where did you use it in this project?* <br>
useState is the component’s internal memory. It has an initial value and it lets us update the UI instantly without reloading the entire page. React re-renders only the portion of the HTML that has changed using Diff algorithm. <br>
useState plays a huge part in this project. I used it to track the selectedStacks array. It also handles the ***Add to Stack*** buttons on the tech cards. It disables them and changes the text when an item is added, and resets them to be clickable again if the item is removed from the ***Your Stack*** list.

4. *What does the useEffect hook do, and why did you need it to load the JSON data?*
A hook called useEffect is used to manage reading an external file or retrieving data from an API. Because data fetching takes place in the background, we require it to load JSON data. In order to prevent the application from stopping or becoming trapped in a never-ending rendering loop as it waits for the data to arrive, useEffect makes sure the data is fetched correctly after the component first renders.

5. *Why does every item in a .map() list need a unique key prop?* <br>
React needs a unique key prop to track each individual component when rendering elements from a loop as map(). React is able to identify the precise component that needs to be modified when an item is added, removed, or has a state change without affecting the rest of the list.

6. *What is conditional rendering? Show one place you used it (example: the empty stack message).* <br>
Displaying a component or user interface element in response to a certain condition is known as conditional rendering. I used it in the ***Your Stack*** section, where **Your stack is empty** is displayed if the selectedStacks array is empty. Instead, it renders each chosen technology card by mapping through the selectedStacks array if the array is not empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? <br>
Data only moves in one direction in React, from the parent to the kid via props. Data cannot be sent straight back to the parent component by a child. On the other hand, we can declare a state variable in the parent and pass its update function—typically a set function—down to the child as a prop when we need to share data backup. In order to write data back to the parent's state, the child can then initiate that function.