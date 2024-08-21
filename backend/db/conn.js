const mongoose = require("mongoose");

const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => console.log("No connection"));

const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log("Database connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

module.exports = connectDB;
