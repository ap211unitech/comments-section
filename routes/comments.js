const express = require("express");
const router = express.Router();
const sample = require("../config/comments_data")



//End Points
router.get("/", (req, res) => {
    let all_comment_in_database = []
    sample.find().exec()
        .then((doc) => {
            doc.map(comm => {
                all_comment_in_database.push({ msg: comm.content })
                // console.log(comments)
            })
            res.status(200).render("index.ejs", { comments: all_comment_in_database });
            // console.log(comments)
        })
        .catch((err) => {
            res.status(400).json({
                msg: "Unable to display comments"
            })
        });

})

//Posting a comment
router.post("/", (req, res) => {
    let { content } = req.body;
    
    if (content.trim() != "") {
        content = content.replace(/\r/gi, "[lb]");
        content = content.replace(/ /gi, "[sp]");
        req.body.content = content;
    }

    const new_comment = new sample(req.body);
    
    if (content.trim() != "") {
        new_comment.save()
            .then(() => {
                res.status(200).redirect("/comments")
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({
                    message: err.message
                })
            });

    } else {
        res.status(200).redirect("/comments");
    }
})


module.exports = router;

