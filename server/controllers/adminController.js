import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(404).json({ success: false, message: "Invalid email" });
    }
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(404).json({ success: false, message: "Invalid email" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log("ADMIN-LOGIN-ERROR: ", error.message);
  }
};
