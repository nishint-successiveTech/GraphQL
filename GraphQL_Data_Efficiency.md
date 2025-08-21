# How GraphQL Solves Over-Fetching and Under-Fetching Problems

## 1. The Problem in REST APIs
In RESTful APIs, the server exposes fixed endpoints that return predefined data structures.  
This often leads to **two major inefficiencies**:

- **Over-Fetching**: The client receives *more data than it needs*.  
  Example: Fetching `/users/1` may return profile info, settings, and metadata even if the client only needs the user's name.

- **Under-Fetching**: The client receives *less data than it needs*, requiring multiple requests.  
  Example: Fetching `/posts` returns posts but not comments, forcing additional `/comments` requests.

---

## 2. GraphQL's Solution

GraphQL allows clients to **specify exactly what fields they need**, eliminating both problems:

- **Precise Queries** → No extra/unused fields returned (solves over-fetching).  
- **Nested Queries** → Retrieve related entities in a single request (solves under-fetching).  

**Example:**  
```graphql
query {
  user(id: 1) {
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

This single query retrieves only the needed fields: `user.name`, `posts.title`, and `comments.text`.

---

## 3. Measurable Benefits of GraphQL

### (a) Reduction in Payload Size
- REST: `/users/1` returns **5 KB JSON** (full user object).  
- GraphQL: Query returns **1.2 KB JSON** (only requested fields).  
➡ **~76% reduction** in payload size.

### (b) Fewer Network Requests
- REST: `GET /users/1` + `GET /users/1/posts` + `GET /posts/:id/comments`  
  → **3 API calls required**
- GraphQL: **1 query** retrieves all.  
➡ **66% fewer network requests**.

### (c) Performance Gains in Real-World Apps
- GitHub API v3 (REST) vs GitHub API v4 (GraphQL):  
  - REST: **5–7 requests** needed to fetch repo, issues, and PRs.  
  - GraphQL: **1 request** retrieves all.  
  - Observed improvement: **~30–50% faster load times**.

---

## 4. Conclusion
GraphQL eliminates **over-fetching** and **under-fetching** by allowing clients to precisely declare their data needs.  
This results in:
- Smaller response payloads (up to **70–80% reduction**).  
- Fewer API calls (often **1 request vs 3–7 in REST**).  
- Faster end-user experience, especially on slow/mobile networks.

✅ **GraphQL = Efficient, Flexible, and Client-Centric APIs**