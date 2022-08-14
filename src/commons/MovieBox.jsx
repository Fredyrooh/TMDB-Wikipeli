import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500"
const MovieBox = ({title,poster_path,vote_average,release_date,overview})=>{
    return(
        <div>
            <h1>{title}</h1>
            <img  src={API_IMG+poster_path} alt={title} height="300px"/>
            <p>{overview}</p>
        </div>
    )
}

export default MovieBox

/* ESTO TRAEMOS DE MOVIES.RESULTS[0]
adult: false
backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
genre_ids: (3) [28, 12, 14]
id: 616037
original_language: "en"
original_title: "Thor: Love and Thunder"
overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
popularity: 8625.547
poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
release_date: "2022-07-06"
title: "Thor: Love and Thunder"
video: false
vote_average: 6.8
vote_count: 1774

ESTO ESTOY USANDO PARA EL PATH = title ,poster_path ,vote_average ,release_date ,overview
*/