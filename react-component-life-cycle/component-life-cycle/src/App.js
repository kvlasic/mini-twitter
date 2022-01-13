import { React, useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLocal = "kvlasic";
    event.target.username.value === newLocal
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  return (
    <div className="App">
      <Hello />
      <LogIn callback={handleSubmit} isLoggedIn={isLoggedIn} />
      <Goodbye />
    </div>
  );
}

const Hello = () => {
  useEffect(() => alert("Hello"), []);
  return null;
};

const LogIn = ({ callback, isLoggedIn }) => {
  return isLoggedIn ? (
    <p>You logged in!</p>
  ) : (
    <form onSubmit={callback}>
      <input type="text" placeholder="username" name="username"></input>
      <input type="submit" value="Login"></input>
    </form>
  );
};

const Goodbye = () => {
  useEffect(() => {
    return () => alert("Goodbye");
  }, []);
  return null;
};

export default App;
