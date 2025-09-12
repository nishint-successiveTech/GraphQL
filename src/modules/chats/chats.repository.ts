import PersonModel from "./chats.model.js";

class ChatsRepo {
  public static async createPerson(userData: any) {
    console.log(userData);
    const user = new PersonModel(userData);
    return await user.save();
  }
}

export default ChatsRepo;
