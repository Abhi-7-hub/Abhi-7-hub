function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using it in App:
function App() {
  return (
    <div>
      <Welcome name="Abhishek" />
      <Welcome name="Tony" />
    </div>
  );
}
