import "./App.css";
import { React, useState, useEffect } from "react";
import { DateTime } from "luxon";

function Avatar({ user }) {
  return (
    <div className="component">
      <img src={user.picture.thumbnail} alt="avatar" />
    </div>
  );
}

function UserName({ user }) {
  return <div className="component">Hello, {user.login.username} </div>;
}

function UserWidget({ user }) {
  return (
    <div className="component">
      <Avatar user={user} />
      <UserName user={user} />
    </div>
  );
}

function Navbar({ user }) {
  return (
    <div className="navbar component">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <UserWidget user={user} />
    </div>
  );
}

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((jsObject) => setUser(jsObject.results[0]));
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App component">
      <h1>PROP DRILLING & useContext & provider pattern</h1>
      {DateTime.local().setLocale("en").plus({ days: -7 }).toISO()}
      <Navbar user={user} />
    </div>
  );
}

export default App;
