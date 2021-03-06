import express from "express";
import authCtrl from "../../controllers/authController";

const authRouter = express.Router();

authRouter.post("/register", authCtrl.createOrg);
authRouter.post("/login", authCtrl.loginOrg);

export default authRouter;
