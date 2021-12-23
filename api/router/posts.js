const router = require("express").Router();
const postController = require("../controller/postsController");


router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.put("/:id/like", postController.likePost);
router.get("/:id", postController.getPost);
router.get("/timeline/:userId", postController.getPostTimeline);
router.get("/profile/:username", postController.getAllUserPost);





module.exports = router;