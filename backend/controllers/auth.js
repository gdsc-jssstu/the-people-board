const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bypass = require("../middleware/bypass");
const knex = require("../db/db");

router.get("/", bypass, (req, res) => {
  res.send("Working User API");
});

router.get("/get", bypass, async (req, res) => {
  const response = await knex.select().table("users");
  res.json({ response });
});

const generateToken = (data) => {
  const KEY = "HACKTOBERFEST";
  const token = jwt.sign(data, KEY);
  return token;
};

const encryptPass = async (pass) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const secPass = await bcrypt.hash(pass, salt);
  return secPass;
};
const validateMail = require("../middleware/validateemail");

router.post("/signup", validateMail, async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    email: email,
  };

  const token = await generateToken(data);
  const pass = await encryptPass(password);
  let success = 0;
  try {
    const d = await knex("users").where({ email: email }).limit(1);
    console.log(d[0]);

    if (d[0]) {
      return res
        .status(203)
        .json({ success: 0, message: "Email already in use" });
    }
    await knex("users")
      .insert({
        name: name,
        email: email,
        password: pass,
        token: token,
      })
      .then(() => {
        success = 1;
        return res.status(200).json({ success, message: "User Created" });
      });
  } catch (error) {
    success = 0;
    console.log(error);
    return res.json({ success, message: "Error" });
  }
});

const decryptPass = async (secured, raw) => {
  let passwordMatches = await bcrypt.compare(raw, secured);
  return passwordMatches;
};

router.post("/login", validateMail, async (req, res) => {
  let success = 0;

  try {
    const { email, password } = req.body;

    let user = await knex("users").where({ email: email }).limit(1);
    user = user[0];
    if (!user) {
      return res.json({ success, message: "Account doesn't exist" });
    }

    const encryptedPass = user["password"];
    const passwordMatches =  await decryptPass(encryptedPass,password);

    if(passwordMatches){
        const token =  user['token']
        success = 1
        return res.status(201).json({success,token,message:"Login Success"})
    }else{
        return res.status(401).json({success,message:"Invalid Credentials"})
    }
    // res.send("okay");
  } catch (error) {
    console.log(error);
    res.json({ success, message: "error occurred !" });
  }
});

module.exports = router;
