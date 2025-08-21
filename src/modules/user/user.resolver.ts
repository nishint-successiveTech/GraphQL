import UserService from "./user.service.js";

export default {
  Query: {
    usersAll: async () => {
      const users = await UserService.allUsers();
      return users;
    },
    userById: (_: unknown, { id }: { id: string }) =>
      UserService.getUserById(id),
  },
};
