/** source/routes/posts.ts */
import express from "express";
import whiteCardController from "../controller/randomWhiteCard";
const router = express.Router();

router.get("/randomwhite", whiteCardController.getWhiteCard);
router.get("/randomblack", whiteCardController.getBlackCard);

export = router;
