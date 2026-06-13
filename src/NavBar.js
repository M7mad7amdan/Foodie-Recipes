import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function NavScrollExample() {
  const [Search , setSearch]= useState("")
  const searchrecipe = useNavigate();
  function handleclcik(e) {
 e.preventDefault();
  if(Search !="")
  {
    searchrecipe(`/search/${Search}`);
  }
  } 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Foodie Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/Beef">Beef</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Dessert">
               Dessert
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/Chicken">
                Chicken 
              </NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/category/Seafood">
                SeaFood 
              </NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/category/Vegetarian">
                Vegetarian 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/About" >
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
               onChange={(e) =>setSearch(e.target.value) }
             
            />
            <Button variant="outline-success" onClick={handleclcik}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;