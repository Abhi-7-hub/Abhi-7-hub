"A functional component in React is just a JavaScript function that returns JSX. It is used to build UI parts, and it can accept inputs called 'props' to make it reusable and dynamic. It's called 'functional' because it’s based on plain functions, and it’s the modern way of building components in React."


// 🧩 1. What is it?
"A Functional Component is a simple JavaScript function."

// 🧩 2. What does it return?
"It returns JSX, which looks like HTML and defines how the UI should look."

// 🧩 3. Does it take input?
"Yes, it can take input using props (just like function parameters)."

// 🧩 4. Why use it?
"Functional components are cleaner, easier to read, and now support hooks like useState, useEffect, etc., which were earlier only in class components."


// Example:
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Used like this:
<Greet name="Abhishek" />
