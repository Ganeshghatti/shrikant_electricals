const jwt = require("jsonwebtoken");
const User = require("../model/Employee");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const userid = jwt.verify(token, process.env.JWTSECRET).userId;
    console.log(userid);
    const user = await User.findOne({ _id: userid });

    if (user) {
      req.user = user;
      console.log(req.user);
    } else {
      console.log("User not found");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
