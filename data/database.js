import mongoose from "mongoose";

// DB Conn
export const connectDB = () => {
  mongoose
    // .connect(process.env.MONGO_URI, {
    //   dbName: "backendApi",
    // })
    .connect(process.env.MONGO_URI)
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
