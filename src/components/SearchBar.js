import { gql } from "@apollo/client";
import { useCallback, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import client from "../client";
import { useAppContext } from "../context";
import { USER_SEARCH_RESPONSE } from "../context/reducer";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { dispatch } = useAppContext();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await client.query({
          query: SEARCH_USER,
          variables: { text: searchText },
        });
        const _users = response.data.search.edges.map((edge) => ({
          ...edge.node,
        }));
        dispatch({
          type: USER_SEARCH_RESPONSE,
          payload: _users,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, searchText]
  );

  return (
    <form>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <InputGroup>
              <FormControl
                placeholder="Search Users..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="btn"
              aria-label="search"
              onClick={handleSubmit}
            >
              &#x1F50D;
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const SEARCH_USER = gql`
  query SearchForUser($text: String!) {
    search(query: $text, type: USER, first: 20) {
      edges {
        node {
          ... on User {
            id
            avatarUrl
            login
          }
        }
      }
    }
  }
`;

export default SearchBar;
