import { useAppContext } from "../context";
import { SELECT_USER } from "../context/reducer";

const UserCard = ({ user }) => {
  const { dispatch } = useAppContext();
  return (
    <div
      className="col card mb-3 m-1"
      onClick={() =>
        dispatch({
          type: SELECT_USER,
          payload: user,
        })
      }
    >
      <div>
        <img src={user.avatarUrl} alt="user1" className="w-100" />
      </div>
      <div className="card-body">
        <p className="card-text text-center">{user.login}</p>
      </div>
    </div>
  );
};

export default UserCard;
