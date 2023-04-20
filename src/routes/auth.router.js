const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect.middleware");
const {
  createdUser,
  Signedin,
  changedPassword,
  logout,
} = require("../controller/auth.controller");

router.post("/signup", createdUser);
router.post("/signin", Signedin);
router.get("/logout", logout);

router.use(protect);
router.patch("/PasswordUpadte", changedPassword, () => {
  console.log("hey");
});
module.exports = router;
