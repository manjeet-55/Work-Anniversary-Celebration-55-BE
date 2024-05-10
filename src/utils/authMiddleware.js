import jwt from "jsonwebtoken";
import { tokenSecret } from "../config";

const verifyToken = (req, res, next) => {
  const token = req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }

    req.userId = decoded.userId; // Set userId in request object
    next();
  });
};

export default verifyToken;
