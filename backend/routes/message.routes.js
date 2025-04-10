import express from "express"
import { getMessages, sentMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();


router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sentMessage)

export default router;