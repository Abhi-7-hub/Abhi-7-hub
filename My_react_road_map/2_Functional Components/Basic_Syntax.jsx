function Welcome() {
  return <h1>Hello, I'm a Functional Component!</h1>;
}



// as Arrow function

const Welcome = () => {
  return <h1>Hello, I'm a Functional Component!</h1>;
};


// Step 2: Use the Component

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}


