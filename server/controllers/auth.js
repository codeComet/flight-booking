import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Admin.findOne({ email });

    if (!existingUser) res.status(404).json({ message: "User not found!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      res.status(400).json({ message: "Invalid Credentials!" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "@Allah123",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const existingUser = await Admin.findOne({ email });

    if (existingUser) res.status(400).json({ message: "User already exists!" });
    if (password !== confirmPassword)
      res.status(400).json({ message: "Passwords do not match!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Admin.create({ email, password: hashedPassword });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "@Allah123",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
