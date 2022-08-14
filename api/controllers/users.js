const express = require("express")
const router = express.Router()
const { WatchList, Users } = require("../models")
const {genereteToken} = require("../config/token")

router.get("/",(req,res,next)=>{
    Users.findAll()
    .then(user=> res.send(user))
    .catch(next) 
 })

router.post("/register",(req,res,next)=>{
    const body = req.body
    Users.create(body)
    .then((user)=> res.status(201).send(user))
    .catch(next)

})

router.post("/login", (req, res) => {
    const {email , password} = req.body
    Users.findOne({where: {email}}).then((user)=>{
        console.log("esto es user+++++++++++",user.dataValues.name);
        if(!user)return res.sendStatus(401)
        user.validatePassword(password).then(isValid =>{
          if(!isValid)return res.sendStatus(401)
          const payload = {
            email: user.email,
            name : user.name
          }
          const token = genereteToken(payload)
          res.cookie("token",token)
          res.send(payload)
        })
      })
      .catch((err)=>console.log("ERROR",err))
  });

module.exports = router