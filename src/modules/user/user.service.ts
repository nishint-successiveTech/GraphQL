import { users, User } from "./user.model.js";

export class UserService {
  static getUserById(id: string): User | undefined {
    return users.find(u => u.id === id);
  }

  static getAllUsers(): User[] {
    return users;
  }

  static createUser(name: string, email: string): User {
    const newUser: User = { id: String(users.length + 1), name, email };
    users.push(newUser);
    return newUser;
  }
}
