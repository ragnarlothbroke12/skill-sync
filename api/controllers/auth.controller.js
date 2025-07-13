import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js";

export const Signup = async(req, res, next) => {
  
    const { name, email, password } = req.body;
    if (!name || !email || !password || name === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword  = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    await newUser.save()
        .then(() => {
            res.status(201).json( "User created successfully" );
        })
        .catch((err) => {
           next(err);
        });
  
};