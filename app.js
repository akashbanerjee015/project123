const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");
// const ejs = require("ejs");
// const PORT =  8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connect to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi i am Root");
});

app.get("/listings", (req, res) => {
  listing.find({}).then((res) => {
    console.log(res);
  });
});
// app.get("/testListing",async(req,res)=>{
//     let sampleListing = new Listing({
//         title:"My New Villa",
//         description:"By the beach",
//         price:1200,
//         location:"calangute,Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
