/** source/routes/posts.ts */
import express from "express";
import controller from "../controller/randomWhiteCard";
const router = express.Router();

router.get("/randomwhite", controller.getPosts);

export = router;
