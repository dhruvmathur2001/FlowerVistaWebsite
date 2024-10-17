const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

const SECRET_KEY = process.env.SECRET_KEY || 'fw_jwt#1024'; 

const loginUser = async (req, res) => {
  const { emailid, password } = req.body;

  try {
      const user = await User.findOne({ emailid });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ id: user._id, email: user.emailid }, SECRET_KEY, { expiresIn: '1h' });

      console.log("User found:", user); // Debug log

      res.status(200).json({
          message: 'Login successful',
          token, 
          user: { 
              id: user._id,
              name: user.name,
              emailid: user.emailid,
              mobile: user.mobile,
          },
      });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};


module.exports = {loginUser};