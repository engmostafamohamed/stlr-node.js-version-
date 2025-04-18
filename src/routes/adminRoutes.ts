import express from "express";
import { validateRegister , handleValidationErrors} from "../middleware/validateRegister";
import { validateSendOtp, validateVerifyOtp,validateResetPassword } from "../middleware/authMiddleware";
import { register, login,sendOtpController,verifyOtpController,resetPasswordController,requestResetPasswordController} from "../controllers/AuthController";
const router = express.Router();
router.get("/getUsers", validateRegister, handleValidationErrors, register);

router.post("/login", login);

router.post("/send-otp", validateSendOtp, handleValidationErrors, sendOtpController);

router.post("/verify-otp", validateVerifyOtp, handleValidationErrors, verifyOtpController);

router.post("/request-reset-password", validateSendOtp, handleValidationErrors, requestResetPasswordController);

// router.post("/verify-reset-Otp", validateVerifyOtp, handleValidationErrors, verifyResetOtpController);

router.post("/reset-password", validateResetPassword, handleValidationErrors, resetPasswordController);

export default router;
