import { users, posts, comments, User, Post, Comment } from "./blog.model.js";

export class BlogService {
  //query
  static getAllUsers(): User[] {
    return users;
  }

public static async getAllPosts(): Promise<Post[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(posts), 5000);
    });
  }

  static getAllComments(): Comment[] {
    return comments;
  }

  //mutations

  static createUser(name: string, email: string): User {
    const newUser: User = { id: String(users.length + 1), name, email };
    users.push(newUser);
    return newUser;
  }

  static createPost(title: string, content: string, authorId: string): Post {
    const newPost: Post = {
      id: String(posts.length + 1),
      title,
      content,
      authorId,
    };
    posts.push(newPost);
    return newPost;
  }

  static createComment(
    text: string,
    authorId: string,
    postId: string
  ): Comment {
    const newComment: Comment = {
      id: String(comments.length + 1),
      text,
      authorId,
      postId,
    };
    comments.push(newComment);
    return newComment;
  }

  static updateUser(
    id: string,
    name?: string,
    email?: string
  ): User | undefined {
    const user = users.find((u) => u.id === id);
    if (!user) return undefined;

    if (name !== undefined) user.name = name;

    if (email != undefined) user.email = email;
    return user;
  }

  static deleteComment(id: string): boolean {
    const index = comments.findIndex((c) => c.id === id);
    if (index == -1) {
      return false;
    }
    comments.splice(index, 1);
    return true;
  }

  //nestedOne

  static getUserPosts(userId: string): Post[] {
    return posts.filter((p) => p.authorId === userId);
  }

  static getUserComments(userId: string): Comment[] {
    return comments.filter((c) => c.authorId === userId);
  }

  static getPostAuthor(post: Post): User | undefined {
    return users.find((u) => u.id === post.authorId);
  }

  static getPostComments(postId: string): Comment[] {
    return comments.filter((c) => c.postId === postId);
  }

  static getCommentAuthor(comment: Comment): User | undefined {
    return users.find((u) => u.id === comment.authorId);
  }

  static getCommentPost(comment: Comment): Post | undefined {
    return posts.find((p) => p.id === comment.postId);
  }
}
