import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
    const movies = useSelector(state=>state.movies)
    const [show,setShow] = useState(false)

    const handleShow = ()=> setShow(true)
    const handleClose = ()=> setShow(false)
  return (
    <div>
             <div className="card text-center bg-secondary mb-3 ">
            <div className="card-body">
               <img className="card-img-top" src={API_IMG+poster_path}/>
            <div className="card-body">
               <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button> 
               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <img className="card-img-top" src={API_IMG+poster_path}/> 
                   <h3>{title}</h3> 
                   <h4>IMDB: {vote_average}</h4>    
                   <h5>Release Date: {release_date}</h5>
                   <br />
                   <h6>Overview</h6>
                   <p>{overview}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </Modal.Footer>
               </Modal>
            </div>
             </div> 
        </div>
    </div>
  )
}

export default Search