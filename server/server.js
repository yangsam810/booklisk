
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = 'mongodb+srv://yangsam810:XooFl5eit9fDO1uM@cluster0.jxohcze.mongodb.net/?retryWrites=true&w=majority';
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   });
mongoose.connect('mongodb://127.0.0.1:27017/BookList');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const bookListRouter = require('./routes/book');

// adding /appointments to before all routes
app.use('/', bookListRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
