import React,{useState} from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import "../../Styles/HeaderStyle.css";
import Logo2 from "../../assets/logo/Logo (2).png";
import { Link } from 'react-router-dom';


const Header = () => {

  // Scrolling Navbar 
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () =>{

    const scrollValue = document?.documentElement?.scrollTop;

    // scrollValue > 100 ? setNav(true) : setNav(false);

    // console.log(scrollValue)
    // console.log(nav)
    if (scrollValue > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  
    window.addEventListener("scroll", changeValueOnScroll);

  


  return (
   <header>
      {/* if nav is true than add class .sticky else no class  */}
      <Navbar collapseOnSelect expand="lg"  className={`${nav === true ? "sticky" : ""}`}>

      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
          <img src={Logo2} alt="logo" className='img-fluid'/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* Here as={Link} is very Important  */}
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/menu"}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/shop"}>
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to={"/blog"}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              <div className='cart'>
              <i className="bi bi-bag-check-fill fs-5"></i>
              <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}

export default Header
