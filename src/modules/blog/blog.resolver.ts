import { BlogService } from "./blog.service.js";
import { User, Post, Comment, comments } from "./blog.model.js";
import { pubsub } from "./pubsub.js";

export default {
  Query: {
    users: () => BlogService.getAllUsers(),
    posts: () => BlogService.getAllPosts(),
    comments: () => BlogService.getAllComments(),
    postsPaginated: async (
      _: unknown,
      {
        page,
        limit,
        sortOrder,
      }: { page: number; limit: number; sortOrder: string }
    ) => {
      return await BlogService.getPaginatedPosts(page, limit, sortOrder);
    },
  },

  Mutation: {
    createUser: (
      _: unknown,
      { name, email }: { name: string; email: string }
    ): User => BlogService.createUser(name, email),

    createPost: (
      _: unknown,
      {
        title,
        content,
        authorId,
      }: { title: string; content: string; authorId: string }
    ): Post => {
      const post = BlogService.createPost(title, content, authorId);
      console.log(post);
      
      pubsub.publish("POST_CREATED", { postCreated: post });
      return post;
    },

    createComment: (
      _: unknown,
      {
        text,
        authorId,
        postId,
      }: { text: string; authorId: string; postId: string }
    ): Comment => {
      const newComment = BlogService.createComment(text, authorId, postId);
      pubsub.publish("COMMENT_CREATED", { commentCreated: newComment });
      return newComment;
    },

    updateUser: (
      _: unknown,
      { id, name, email }: { id: string; name?: string; email?: string }
    ): User | null => BlogService.updateUser(id, name, email) ?? null,

    deleteComment: (_: unknown, { id }: { id: string }): boolean =>
      BlogService.deleteComment(id),
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
  
  Subscription: {
    postCreated: {
      subscribe: () => {
        return pubsub.asyncIterableIterator(["POST_CREATED"]);
      },
    },
    commentCreated: {
      subscribe: () => {
       return pubsub.asyncIterableIterator(["COMMENT_CREATED"]);
      },
    },
  },
};



