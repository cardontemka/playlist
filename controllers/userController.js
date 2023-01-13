const { User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  const body = req.body;
  try {
    const result = await new User(body).save();
    res.send(result);
  } catch (error) {
    res.status(500).send('error')
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "Username or password is invalid" });
  }
};

exports.getUsers = async (_req, res) => {
  try {
    const result = await User.find({}).populate('playlists');
    res.send(result);
  } catch (error) {
    res.status(502).send('error')
  }
};

exports.getUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id).populate('playlists');
    res.send(result);
  } catch (error) {
    res.status(503).send('error')
  }
};