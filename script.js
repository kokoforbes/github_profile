// Your personal access token
const token = "71703b226b65ec5d4a6da881aa14bf725572f7e1";

const oauth = { Authorization: "bearer " + token };

// The GraphQL query, a string
const query = ` 
query {
  user(login: "kokoforbes") {
    name
    avatarUrl
    login
    bioHTML
    repositories(first: 20) {
      totalCount
      edges {
        node {
          name
          updatedAt
          forkCount
          descriptionHTML
          primaryLanguage {
            name
            color
          }
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
          issues(states: [OPEN]) {
            totalCount
          }
        }
      }
    }
}
}`;

(function queryFetch() {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: oauth,
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
     console.log(data)
    })
    .catch((error) => console.log(error));
})();
