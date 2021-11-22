import TimeAgo from "react-timeago";

const IssueContainer = ({ issue }) => {
  return (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-6">Issue #{issue.number}</div>
        <div className="col-md-6 text-muted">
          created by {issue.author.login} <TimeAgo date={issue.createdAt} />
        </div>
      </div>
    </div>
  );
};

export default IssueContainer;
