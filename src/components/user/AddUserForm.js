import "./AddUserForm.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import "../ui/Button.css";
import { useState } from "react";

const AddUserForm = () => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameChangedHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName);
    console.log(enteredAge);
    setUserName("");
    setAge("");
  };
  return (
    <Card className="input">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangedHandler}
          value={enteredUserName}
        />
        <label htmlFor="age (Years)">Age</label>
        <input
          type="number"
          id="age"
          onChange={ageChangedHandler}
          value={enteredAge}
        />
        <Button className="button" type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
