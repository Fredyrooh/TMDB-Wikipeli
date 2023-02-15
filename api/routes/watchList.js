const express = require("express")
const { WatchList, Users } = require("../models")
const router = express.Router()

router.get("/",(req,res,next)=>{
    WatchList.findAll()
    .then(fav=> res.send(fav))
    .catch(next)
})

   let idMovie = []
    const pushFavorites = (movie)=>{
        dispatch(getFavoritesRequest())
        .then(arr=>arr.array.forEach(e=>idMovie.push(e)))
        idMovie.push(movie)
        return {idMovie,fav:true}
    }

router.post("/create/:idMovie/:userId",(req,res)=>{
    const movie = req.params.idMovie
    const user = req.params.userId
    const body = {idMovie:movie,userId:user} 
  WatchList.create(body)
    .then((fav) => res.status(201).send(fav)
    .then(console.log("favorito creado con exito",)))
    .catch(err=>console.log("ERROR!!",err))
    
})

router.put("/", (req, res) => {
  const { id, idMovie } = req.query;
  WatchList.findByPk(id)
    .then((fav) => fav.addFavorite(idMovie))
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send("Already added"));
}); 

router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    WatchList.destroy({where:{idMovie}})
    res.status(200).send("Se elimino la pelicula de favoritos")
})

module.exports = router