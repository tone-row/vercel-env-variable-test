function App() {
  return (
    <div className="App">
      <h1>process.env.REACT_APP_MY_SECRET</h1>
      <h2>Is equal to...</h2>
      <h1>{process.env.REACT_APP_MY_SECRET}</h1>
    </div>
  );
}

export default App;
