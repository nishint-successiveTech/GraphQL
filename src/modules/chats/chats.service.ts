import ChatsRepo from "./chats.repository.js";

class ChatsService {
  public static async createPerson(userData: any) {
    return await ChatsRepo.createPerson(userData);
  }
}

export default ChatsService;
 