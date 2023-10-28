const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Word = require("./models/wordModel");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// const testWord = new Word({
//   english: "test",
//   turkish: "test",
//   example: "test",
// });

// testWord
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR: ", err);
//   });

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful");
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
