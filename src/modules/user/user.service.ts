import users, { User } from "./user.model.js";

class UserService {
  public static async allUsers() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return users;
  }

  public static async getUserById(id: string) {
    const user = users.find((c) => c.id === id);
    return user;
  }
}

export default UserService;
