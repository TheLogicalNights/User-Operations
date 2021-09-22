import "./AddUserForm.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import "../ui/Button.css";
import { useState } from "react";
import ErrorModal from "../ui/ErrorModal";

const AddUserForm = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [isValidUsername, setValidityOfUsername] = useState(true);
  const [isValidAge, setValidityOfAge] = useState(true);
  const [error, setError] = useState();

  const usernameChangedHandler = (event) => {
    setValidityOfUsername(true);
    setUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setValidityOfAge(true);
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setValidityOfUsername(false);
      setError({
        title: "Invalid Username",
        message: "Please Enter a valid username (Non empty value)",
      });
      return;
    }
    if (enteredAge.trim().length === 0) {
      setValidityOfAge(false);
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (Non empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (Greater than 0)",
      });
      return;
    }
    setUserName("");
    setAge("");
    props.onAddUser(enteredUserName, enteredAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={`${"input"}`}>
        <form onSubmit={onSubmitHandler}>
          <label
            htmlFor="username"
            className={`${isValidUsername ? "" : "invalid"}`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={usernameChangedHandler}
            value={enteredUserName}
          />
          <label
            htmlFor="age (Years)"
            className={`${isValidAge ? "" : "invalid"}`}
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className={`${isValidAge ? "" : "invalid"}`}
            onChange={ageChangedHandler}
            value={enteredAge}
          />
          <Button className="button" type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
