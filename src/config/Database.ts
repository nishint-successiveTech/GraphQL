import mongoose from "mongoose";
import AppConfig from "./AppConfig.js";

class Database {
  public static async connectDB() {
    try {
      await mongoose.connect("mongodb://localhost:27017/graphQL");
      console.log("DB CONNECTED SUCCESSFULLY");
    } catch (error: any) {
      console.log("DB NOT CONNECTED");
    }
  }
}

export default Database;
