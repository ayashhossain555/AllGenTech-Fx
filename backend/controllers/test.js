const Test = require("../models/test");

const test = async (req, res) => {
  try {
    console.log("test controller");
    console.log(req.body);
    const { name, email } = req.body;
    const test = new Test({ name, email });
    await test.save();
    res.status(201).json(test);    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = { test };