import { useQuery, gql } from "@apollo/client";
import { useAppContext } from "../context";
import AlertMessage from "./AlertMessage";
import Loader from "./Loader";
import PaginationContainer from "./PaginationContainer";
import RepoContainer from "./RepoContainer";

const RepoList = () => {
  const { state } = useAppContext();
  const { loading, data, error } = useQuery(GET_REPOS_FOR_USER, {
    variables: { user: state.selectedUser.login },
  });

  if (error) {
    return <AlertMessage>{error.message}</AlertMessage>;
  }
  if (error) {
  }
  if (loading) {
    return <Loader />;
  }
  const { totalCount, edges } = data.repositoryOwner.repositories;
  return (
    <>
      <h2>
        Repositories
        <span className="badge bg-primary rounded-pill">{totalCount}</span>
      </h2>
      <div className="container">
        {edges.map(({ node }) => (
          <RepoContainer repository={node} />
        ))}
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <PaginationContainer />
      </div>
    </>
  );
};

const GET_REPOS_FOR_USER = gql`
  query getReposForUser($user: String!) {
    repositoryOwner(login: $user) {
      repositories(orderBy: { field: CREATED_AT, direction: DESC }, first: 10) {
        totalCount
        edges {
          node {
            id
            name
            forks {
              totalCount
            }
            stargazers {
              totalCount
            }
            watchers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export default RepoList;
