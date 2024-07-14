const { signUp, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middleWares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", Login);
router.post("/", userVerification);
module.exports = router;
