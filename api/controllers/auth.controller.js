import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser
    .save()
    .then(() => {
      res.status(201).json("User created successfully");
    })
    .catch((err) => {
      next(err);
    });
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
     return next(errorHandler(404, "User not found"));
    }

    const isPasswordValid = bcryptjs.compareSync(password, user.password);
    if (!isPasswordValid) {
      return next(errorHandler(400, "Invalid credentials"));
    }

    const {password:pass, ...rest} = user._doc; // Exclude password from response

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).cookie("access_token", token, {
        httpOnly: true,}).json(rest);
    
  } catch (error) {
    next(error);
  }
};
