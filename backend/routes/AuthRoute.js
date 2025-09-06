import express from "express";
import {logIn, Me, logOut} from "../controllers/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.post("/login", logIn);
router.delete("/logout", logOut);


export default router;
