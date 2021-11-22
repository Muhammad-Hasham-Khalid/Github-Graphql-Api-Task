import UsersList from "../components/UsersList";
import RepoList from "../components/RepoList";
import SearchBar from "../components/SearchBar";
import { useAppContext } from "../context";

const HomePage = () => {
  const { state } = useAppContext();
  return (
    <>
      <SearchBar />
      {state.searchedUsers.length > 0 && (
        <>
          <h2>Users</h2>
          <UsersList />
        </>
      )}
      <div className="pt-5"></div>
      {state.selectedUser && (
        <>
          <RepoList />
        </>
      )}
    </>
  );
};

export default HomePage;
