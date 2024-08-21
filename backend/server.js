require("dotenv").config();
const connectDB = require("./db/conn");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const testRouter = require("./routes/test");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/test", testRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
