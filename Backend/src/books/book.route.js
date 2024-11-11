const express = require('express');
const Book = require("./book.model.js");
const router = express.Router();

router.post("/create-book", async (req, res) => {
    try {
        const newBook = await Book({...req.params});
        await newBook.save();
        res.status(200).send({
            message: "Book added Successfully",
            book: newBook,
            success: true
        })
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create the book"})
    }
})

module.exports = router;