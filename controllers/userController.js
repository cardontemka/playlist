const { User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  console.log(user);

  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "Username or password is invalid" });
  }
};

exports.getUsers = async (_req, res) => {
  const result = await User.find({}).populate('playlists');
  res.send(result);
};

exports.getUser = async (req, res) => {
  const result = await User.findById(req.params.id).populate('playlists');
  res.send(result);
};