const router = require("express").Router();
let Book = require("../models/book.model");

// @route GET /
// @desciption Get all books
router.route("/").get((req, res) => {
  Book.find()
    .then((Books) => res.json(Books))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((Books) => res.json(Books))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  // create a new Appointment object 
  const newBook = new Book({
    title,
    author,
    description
  });

  console.log("checkpoint");

  // save the new object (newBook)
  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((Book) => {
      Book.title = req.body.title;
      Book.author = req.body.author;
      Book.description = req.body.description;
      Book
        .save()
        .then(() => res.json("Book updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  console.log("try delete " + req.params.id)
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
