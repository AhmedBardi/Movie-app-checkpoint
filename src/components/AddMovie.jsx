import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddMovie({addNewMovie}) {
// ---------------------------------------Bootstrap-----------------------------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// -------------------------------------ِCode-----------------------------
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [rate, setRate] = useState("");
const [    posterUrl, setPosteUrl] = useState("");
// console.log(title,description,rate,    posterUrl);
const handleAddMovie = (e) => {
  //Arrêter le chargement de la page
  e.preventDefault()
  //Construire l'objet film à ajouter
  const newMovie = {id: Math.random(), title, description, rate,     posterUrl}
  //push dans le tableau des films
  console.log("newMovie", newMovie );
  addNewMovie(newMovie);
  //fermer le modal
  handleClose();
};


  return (
    <>
      <Button variant="dark" onClick={handleShow} className='m-5'>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddMovie}>
        <Modal.Body>
      
                
      <Form.Group className="mb-3" >
        {/* ---------------------------------------------------- */}
        <Form.Label>Movie Title:</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} 
        onChange={(e)=>setTitle(e.target.value)} required/> {/*récuperer ce qu'écrit l'utilisateur dans le state title */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="text" placeholder="1-5" value={rate} onChange={(e)=>setRate(e.target.value)} />
        <Form.Label>Poster URL:</Form.Label>
        <Form.Control type="text" placeholder="Enter poster URL" value={    posterUrl} onChange={(e)=>setPosteUrl(e.target.value)} />
      </Form.Group>

    
        </Modal.Body>
        <Modal.Footer> 
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" 
          type='submit'
          disabled={
            !title.trim() ||
            !rate ||
            !description.trim() ||
            !posterUrl
          }>
            Save Changes
          </Button>
          
        </Modal.Footer>
        </Form>
      </Modal>

    </>
    
  );
}

export default AddMovie;