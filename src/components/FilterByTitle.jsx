import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FilterByTitle = ({searchTitle,setSearchTitle}) => {
  


return(
    <div>   
      {" "} 
        <Form className="d-flex m-5 gap-3">
        <Form.Control type="email" placeholder="Enter the name of the movie" value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)}/>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
</div>
)
}

export default FilterByTitle;
