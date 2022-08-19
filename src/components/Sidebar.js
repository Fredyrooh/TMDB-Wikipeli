import React from 'react'


const ejemplo = ["pelicula 1","pelicula 2","pelicula 3","pelicula 4","pelicula 5"]
const ejemplo2 = ["serie 1","serie 2","serie 3","serie 4","serie 5"]
const Sidebar = () => {
  return (
    <div>
          <aside className="menu column is-one-quarter">
      <p className="menu-label">PELICULAS</p>
      <ul className="menu-list">
        {ejemplo.map((pelicula, i) => (
          <li key={i}>
            {pelicula}
            {/* {<Link to={`single/playlists/${playlist.id}`}>{playlist.name}</Link>} */}
          </li>
        ))}
      </ul>
      <p className="menu-label">SERIES</p>
      <ul className="menu-list">
        {ejemplo2.map((serie, i) => (
          <li key={i}>
            {serie}
            {/* {<Link to={`single/artists/${artist.id}`}>{artist.name}</Link>} */}
          </li>
        ))}
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar