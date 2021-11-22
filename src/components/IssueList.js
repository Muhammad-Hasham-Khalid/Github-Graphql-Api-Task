import IssueContainer from "./IssueContainer";

const IssueList = ({ setModalShow, issues }) => {
  return (
    <div>
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h3>
          Open Issues{" "}
          <span className="badge bg-primary rounded-pill">
            {issues.totalCount}
          </span>
        </h3>
        <button className="btn btn-success" onClick={() => setModalShow(true)}>
          + New Issue
        </button>
      </div>
      {issues.edges.map(({ node }) => (
        <IssueContainer issue={node} />
      ))}
    </div>
  );
};

export default IssueList;
