import "./App.css";
import AddUserForm from "./components/user/AddUserForm";
import UsersList from "./components/user/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.round(Math.random() * 1000000), name: username, age: age },
      ];
    });
  };
  return (
    <div>
      <AddUserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
