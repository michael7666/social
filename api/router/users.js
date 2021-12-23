const router = require("express").Router();
const userController = require("../controller/userController");


router.put("/:id",userController.getUserId);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getUser);
router.put("/:id/follows", userController.followUser);
router.put("/:id/unfollows", userController.unFollowUser);
router.get("/friends/:userId", userController.getFriends);


module.exports = router;