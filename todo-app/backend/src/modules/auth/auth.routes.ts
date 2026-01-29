import { Router } from "express";
import { signup } from "./auth.controller.ts";

const router = Router();

router.post("/signup", signup);

export default router;
