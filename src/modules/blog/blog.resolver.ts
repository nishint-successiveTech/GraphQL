import { BlogService } from "./blog.service.js";
import { User, Post, Comment } from "./blog.model.js"

export default {
  Query: {
    users: () => BlogService.getAllUsers(),
    posts: () => BlogService.getAllPosts(),
    comments: () => BlogService.getAllComments(),
  },

  Mutation: {
    createUser: (_: unknown, { name, email }: { name: string; email: string }): User =>
      BlogService.createUser(name, email),

    createPost: (
      _: unknown,
      { title, content, authorId }: { title: string; content: string; authorId: string }
    ): Post => BlogService.createPost(title, content, authorId),

    createComment: (
      _: unknown,
      { text, authorId, postId }: { text: string; authorId: string; postId: string }
    ): Comment => BlogService.createComment(text, authorId, postId),
  },

  User: {
    posts: (parent: User) => BlogService.getUserPosts(parent.id),
    comments: (parent: User) => BlogService.getUserComments(parent.id),
  },

  Post: {
    author: (parent: Post) => BlogService.getPostAuthor(parent),
    comments: (parent: Post) => BlogService.getPostComments(parent.id),
  },

  Comment: {
    author: (parent: Comment) => BlogService.getCommentAuthor(parent),
    post: (parent: Comment) => BlogService.getCommentPost(parent),
  },
};
