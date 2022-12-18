import jwt, { decode } from "jsonwebtoken";

const secret_key = "next-market";

const auth = (handler) => {
    return async(req, res) => {
        if (req.method === "GET") {
            return handler(req, res);
        }
        // const token = await req.handler.authorization.split(" ")[1];
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QwMDFAdGVzdDAwMS5jb20iLCJpYXQiOjE2NzEzMjY3NDEsImV4cCI6MTY3MTQwOTU0MX0.kpwrisNPFfbyCwRp8vKFTQINffzfnUn-HGy0Dsx4vUM";
        // console.log(token);
        if (!token) {
            return res.status(401).json({ message: "トークンがありません" });
        }

        try {
            const decoded = jwt.verify(token, secret_key);
            console.log(decoded);
            return handler(req, res);
        } catch (err) {
            return res
                .status(401)
                .json({ message: "トークンが正しくないので、ログインしてください" });
        }
    };
};

export default auth;