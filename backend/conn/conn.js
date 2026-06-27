// const mongoose = require("mongoose");
// const conn = async () => {
//     try{
//         await mongoose
//         .connect("mongodb+srv://himanshu050704_db_user:himanshu123456@cluster0.y3ddwpp.mongodb.net/contact")
//         .then(
//             () => {
//                 console.log("connected");
//             },
//             (error) => {
//                 console.log(error);
//             }
//         );
//     }catch(error){
//         console.log(error);
//     }
// };

// conn();

const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://himanshu050704:himanshu123456@cluster0.y3ddwpp.mongodb.net/contact?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn();