import { UserService } from "./user.service.js";

export default {
  Query: {
    user: (_: unknown, { id }: { id: string }) =>
      UserService.getUserById(id),
    users: () => UserService.getAllUsers(),
  },
  Mutation: {
    createUser: (_: unknown, { name, email }: { name: string; email: string }) =>
      UserService.createUser(name, email),
  },
};
