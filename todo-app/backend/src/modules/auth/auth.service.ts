import { User } from "./auth.model.ts";
import { hashPassword } from "../../utils/hash.ts";

export async function createUser(data: any) {
  const existing = await User.findOne({ email: data.email });
  if (existing) throw new Error("User already exists");

  const hashed = await hashPassword(data.password);

  return User.create({
    ...data,
    password: hashed,
  });
}
