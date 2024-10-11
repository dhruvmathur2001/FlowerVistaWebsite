const User = require("../models/User");

const addUser = async (req, res) => {
  try {
    const { name, mobile, emailid, password } = req.body;

    const newUser = new User({
        name,
        mobile,
        emailid,
        password
    })

    await newUser.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {addUser,getUsers};