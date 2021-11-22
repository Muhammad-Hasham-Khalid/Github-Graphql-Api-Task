import { useCallback, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { gql } from "@apollo/client";
import client from "../client";

const CreateIssueModal = ({ show, hide, repositoryId }) => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueBody, setIssueBody] = useState("");

  const handleCreateIssue = useCallback(async () => {
    try {
      await client.mutate({
        mutation: CREATE_ISSUE,
        variables: {
          repositoryId,
          title: issueTitle,
          body: issueBody,
        },
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      hide();
    }
  }, [hide, issueBody, issueTitle, repositoryId]);

  return (
    <Modal show={show} onHide={hide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>New Issue</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="title"
            placeholder="Title"
            value={issueTitle}
            onChange={(e) => setIssueTitle(e.target.value)}
          />
        </div>
        <div className="mt-3 form-group">
          <textarea
            placeholder="Description"
            className="form-control"
            id="exampleTextarea"
            rows="3"
            value={issueBody}
            onChange={(e) => setIssueBody(e.target.value)}
          ></textarea>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" onClick={handleCreateIssue}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CREATE_ISSUE = gql`
  mutation createIssueMutation(
    $repositoryId: String!
    $title: String!
    $body: String!
  ) {
    createIssue(
      input: { repositoryId: $repositoryId, title: $title, body: $body }
    ) {
      clientMutationId
    }
  }
`;

export default CreateIssueModal;
