import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async(req, res) => {
  
    const { name, email, password } = req.body;
    if (!name || !email || !password || name === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All fields are required" });
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
            console.error(err);
            res.status(500).json( "Internal server error" );
        });
  
};