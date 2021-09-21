import "./App.css";
import AddUserForm from "./components/user/AddUserForm";
import UsersList from "./components/user/UsersList";

function App() {
  return (
    <div>
      <AddUserForm />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
