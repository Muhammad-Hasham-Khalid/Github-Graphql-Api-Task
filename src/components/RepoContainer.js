import { Link } from "wouter";
import { useAppContext } from "../context";

const RepoContainer = ({ repository }) => {
  const { state } = useAppContext();
  return (
    <Link href={`/${state.selectedUser.login}/${repository.name}`}>
      <div className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">{repository.name}</div>
          <div className="col-md-6">
            <span className="badge bg-warning">
              Stars: {repository.stargazers.totalCount}
            </span>
            <span className="badge bg-secondary">
              Watchers: {repository.watchers.totalCount}
            </span>
            <span className="badge bg-primary">
              Forks: {repository.forks.totalCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RepoContainer;
