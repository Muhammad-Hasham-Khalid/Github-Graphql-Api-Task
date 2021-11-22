import { useAppContext } from "../context";
import UserCard from "./UserCard";

const UsersList = () => {
  const {
    state: { searchedUsers },
  } = useAppContext();
  return (
    <div className="row">
      <div className={`row ${searchedUsers.length > 5 ? "scroll-x" : ""}`}>
        {searchedUsers.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
