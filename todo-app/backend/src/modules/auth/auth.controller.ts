import type { Request, Response } from "express";
import { signupSchema } from "./auth.schema.ts";
import { createUser } from "./auth.service.ts";

export async function signup(req: Request, res: Response) {
  try {
    const data = signupSchema.parse(req.body);
    const user = await createUser(data);

    res.status(201).json({
      message: "User created successfully",
      userId: user._id,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
