import React from 'react'
import Content from './Content'
import { Navbar } from './Navbar'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
<h1>Bienvenidos a TMDB FREDY</h1>
<Sidebar/>
<Content/>
    </div>
  )
}

export default Home