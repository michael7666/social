const Post = require("../model/Post");
const User = require("../model/User");



//create post

module.exports.createPost =async (req, res) => {
  const newPost = new Post(req.body);
  try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
  } catch (error) {
      console.log(error);
      res.status(500).json({
          message: "unable to post"
      })
  }
}
//update post
module.exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("the post has been updated")
        }else{
            res.status(403).json("yu can only update your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

//delete user post

module.exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been delete")
        }else{
            res.status(403).json("you can only delete your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

//like and dislike post

module.exports.likePost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("the post has been like");
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("the post has been dislike");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

//get post 

module.exports.getPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

// get timeline post
module.exports.getPostTimeline = async(req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPost = await Promise.all(
            currentUser.followings.map((friendId) => {
            return Post.find({userId: friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendPost));
    } catch (err) {
        res.status(500).json(err);
    }
}


// get all user's post
module.exports.getAllUserPost = async(req, res) =>{
    try {
        const user = await User.findOne({username: req.params.username});
        const posts = await Post.find({userId: user._id})
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}