import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRoute } from "wouter";
import IssueList from "../components/IssueList";
import CreateIssueModal from "../components/SampleModal";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";

const RepoPage = () => {
  const [_, params] = useRoute("/:username/:repositoryName");
  const { loading, data, error } = useQuery(GET_ISSUES_FOR_REPO, {
    variables: {
      username: params.username,
      repoName: params.repositoryName,
    },
  });
  const [modalShow, setModalShow] = useState(false);

  if (error) {
    return <AlertMessage>{error.message}</AlertMessage>;
  }

  if (loading) {
    return <Loader />;
  }

  const { stargazers, watchers, forks, issues, id } = data.repository;
  return (
    <div>
      <div className="card card-body my-2">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4>{params.repositoryName}</h4>
          </div>

          <div>
            <span className="badge bg-warning">
              Stars: {stargazers.totalCount}
            </span>
            <span className="badge bg-secondary">
              Watchers: {watchers.totalCount}
            </span>
            <span className="badge bg-primary">Forks: {forks.totalCount}</span>
          </div>
        </div>
      </div>

      <IssueList setModalShow={setModalShow} issues={issues} />

      <CreateIssueModal
        show={modalShow}
        hide={() => setModalShow(false)}
        repositoryId={id}
      />
    </div>
  );
};

const GET_ISSUES_FOR_REPO = gql`
  query getIssuesForRepo($username: String!, $repoName: String!) {
    repository(name: $repoName, owner: $username) {
      id
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      forks {
        totalCount
      }
      issues(first: 10) {
        totalCount
        edges {
          node {
            author {
              login
            }
            createdAt
            number
          }
        }
      }
    }
  }
`;

export default RepoPage;
