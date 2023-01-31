import User from "../models/User.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "test@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "test",
    email: "test@localhost",
  });

  newUser.password = await newUser.encryptPassword("testpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};