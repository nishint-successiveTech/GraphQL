export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export interface Comment {
  id: string;
  text: string;
  authorId: string;
  postId: string;
}

export const users: User[] = [
  { id: "1", name: "Amit Sharma", email: "amit@example.com" },
  { id: "2", name: "Neha Verma", email: "neha@example.com" },
];

export const posts: Post[] = [
  { id: "1", title: "A Hello GraphQL", content: "First post!", authorId: "1" },
  { id: "2", title: "B Hello GraphQL2", content: "First post2!", authorId: "2" },
  { id: "3", title: "C Hello GraphQL3", content: "First post3!", authorId: "3" },
];

export const comments: Comment[] = [
  { id: "1", text: "Nice post 👌", authorId: "2", postId: "1" },
];
