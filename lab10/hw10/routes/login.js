const express = require("express");
const router = express.Router();
const data = require("../data");
const bcrypt = require("bcryptjs");
router.post("/", (req,res)=>{
    const userInfo = req.body;
    if(!userInfo.username){
        res.render("login/error",{title:"Login",error:"empty username"});
        return;
    }
    if(!userInfo.password){
        res.render("login/error",{title:"Login",error:"empty password"});
        return;
    }
    let user = data.filter(function(user){
        return user.username === userInfo.username;
    });
    // console.log(user);
    if(user[0]!= undefined && bcrypt.compareSync(userInfo.password, user[0].hashedPassword)){
        let newUser = {...user[0]}
        delete newUser.hashedPassword;
        delete newUser.Password;
        req.session.user = newUser;
        res.redirect("/private");
    }else{
        res.render("login/error",{error:"username or password error",title:"login"});
    }
});
router.get("*",(req,res)=>{
    res.redirect("/");
});
module.exports = router;
