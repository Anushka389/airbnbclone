const mongoose = require("mongoose");
const initData = require("./data .js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    //initData is object or hume key ko acess krna h to data
    console.log("data was initiliazed");
};

initDB();







