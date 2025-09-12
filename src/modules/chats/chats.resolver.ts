import ChatsService from "./chats.service.js";

class ChatsResolvers {
  public static Mutation = {
    createPerson: async ({name,email}:{name:string; email:string}) => {
      console.log("Resolver");
      return await ChatsService.createPerson({name,email});
    },
  };

  // 👇 isko add karo
  public static Person = {
    id: (parent: any) => parent._id.toString(),
  };
}

export default ChatsResolvers;
