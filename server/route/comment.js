const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');

router.post('/comments', async (req, res) => {
    const { username, content } = req.body;

    try {
        const newComment = new Comment({ username, content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({error: "Failed to post comment"})
    }
});

module.exports = router;