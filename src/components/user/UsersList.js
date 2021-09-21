import "./UsersList.css";
import Card from "../ui/Card";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li>
            {props.users.name} ({props.users.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
