const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log({reqBody: req.body});
    const {post_Id, body}=req.body;
    const newComment = await Comment.create({
      post_Id: parseInt(post_Id), 
      body,
      user_Id: req.session.user_Id,
    });
    res.json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
