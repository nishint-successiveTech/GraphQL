import UserService from "./user.service.js";

export default {
  Query: {
    usersAll: async () => {
      const users = await UserService.allUsers();
      return users;
    },
    userById: async (_: unknown, { id }: { id: string }) => {
      const userExist = await UserService.getUserById(id);

      if (!userExist) {
        return {
          message: "user not found",
          code: "user not found",
        };
      }

      return userExist;
    },
  },
  UserResult: {
    __resolveType(obj: any) {
      if (obj.code) return "UserError";
      if (obj.id) return "User";
      return null;
    },
  },
};
