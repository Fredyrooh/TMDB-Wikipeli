const express = require("express")
const router = express.Router()
const { Users } = require("../models")
const { genereteToken } = require("../config/token")
const validateAuth = require("../utils/auth")

//pedido de usuarios
router.get("/", (req, res, next) => {
  Users.findAll()
    .then(user => res.send(user))
    .catch(next)
})
//validavion de pagina de usuario
router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user)
})

//validacion de usuario
router.get("/me", validateAuth, (req, res) => {
   console.log("esto es res.send", req.user);
  res.send(req.user)
})
//registro usuarios
router.post("/register", (req, res, next) => {
  const body = req.body
  Users.create(body)
    .then((user) => res.status(201).send(user))
    .catch(next)

})
//login usuario
router.post("/login", (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return console.log("no hay datos");
  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401)
    user.validatePassword(password).then(isValid => {
      if (!isValid) return res.sendStatus(401)
      const payload = {
        email: user.email,
        name: user.name,
        id: user.id,
      }
      console.log("++++Payload++++",payload)
      const token = genereteToken(payload)
      res.cookie("token", token)
      res.send(payload)
    })
  })
    .catch((err) => console.log("ERROR", err))
});

//deslogueo de usuarios
router.post("/logout/", (req, res) => {
  res.clearCookie("token")
  res.sendStatus(204)
})

//agregar favorito 
router.put("/favorites",(req,res)=>{
  // const {idMovie,id} = req.body
  // Users.findByPk(id)
  // .then(user =>user.idMovie.push(idMovie))
  // .then((user) => res.send(user))
  // .catch(() => res.status(500).send("Already added"));

  res.send(req.body)
    console.log("+++++++recalculando+++++++");
})

module.exports = router