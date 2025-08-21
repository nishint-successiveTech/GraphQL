# Comparative Analysis: RESTful API vs GraphQL API

## Dataset Example

Assume we have a blogging platform dataset with: - **Users** (id, name,
email) - **Posts** (id, title, content, userId) - **Comments** (id,
text, postId, userId)

------------------------------------------------------------------------

## RESTful API

### Characteristics

1.  **Endpoint-based** → Each resource has its own endpoint (e.g.,
    `/users`, `/posts`, `/comments`).
2.  **Over-fetching** → Client may receive unnecessary data.
3.  **Under-fetching** → Multiple requests required to get related data.
4.  **Versioning** → Requires `/v1`, `/v2` endpoints for API evolution.

### Example

-   To fetch a user with posts and comments:
    -   GET `/users/1`
    -   GET `/users/1/posts`
    -   GET `/posts/1/comments`

👉 Requires **3 API calls**.

------------------------------------------------------------------------

## GraphQL API

### Characteristics

1.  **Single endpoint** → Typically `/graphql`.
2.  **Exact data fetching** → Client specifies fields needed.
3.  **No over/under-fetching** → Single query can fetch all related
    data.
4.  **Schema-driven** → Strongly typed schema, no need for versioning.

### Example

``` graphql
query {
  user(id: 1) {
    id
    name
    posts {
      title
      comments {
        text
      }
    }
  }
}
```

👉 Requires **1 API call** only.

------------------------------------------------------------------------

## Performance Comparison

  ------------------------------------------------------------------------------
  Feature              RESTful API                  GraphQL API
  -------------------- ---------------------------- ----------------------------
  **Data Fetching**    Multiple endpoints           Single endpoint

  **Over-fetching**    High risk                    None (fetch exact fields)

  **Under-fetching**   Common (needs multiple       None (all in one query)
                       requests)                    

  **Complex Queries**  Hard (nested resources =     Easy (nested queries
                       many calls)                  supported)

  **Versioning**       Requires `/v1`, `/v2`        Not required (evolves via
                                                    schema)

  **Learning Curve**   Low (easy to adopt)          Higher (need schema &
                                                    resolvers)

  **Tooling**          Widely available (Postman,   Strong ecosystem (Apollo,
                       Swagger)                     GraphiQL)
  ------------------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

-   **REST** is simple, widely adopted, and better for small apps or
    public APIs where predictable endpoints matter.
-   **GraphQL** is powerful for complex datasets (like blogs with nested
    users, posts, comments), reduces network calls, and improves
    performance.

👉 For a blogging platform dataset with relational data, **GraphQL is
more efficient** than REST.