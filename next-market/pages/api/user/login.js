import jwt from "jsonwebtoken";
import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";

const secret_key = "next-market";

const loginUser = async(req, res) => {
    try {
        await connectDB();
        // console.log(req.body.email);
        const savedUserData = await UserModel.findOne({ email: req.body.email });
        // console.log(savedUserData);
        if (savedUserData) {
            if (req.body.password === savedUserData.password) {
                const payload = { email: req.body.email };
                const token = jwt.sign(payload, secret_key, { expiresIn: "23h" });
                console.log(token);
                return res.status(200).json({
                    message: "ログイン成功",
                    token: token,
                });
            } else {
                return res.status(400).json({
                    message: "ログイン失敗:パスワードが間違っています",
                });
            }
        } else {
            return res.status(400).json({
                message: "ログイン失敗",
            });
        }
    } catch (err) {
        return res.status(400).json({ message: "ログイン失敗" });
    }
};

export default loginUser;