import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

class Header extends Component{

	constructor(props){
		super(props);
	}

	toggleClick(){
		var ham = document.querySelector(".ham"); // or:.classList.toggle("open");
		ham.classList.toggle("open");
	}

	render(){
		return(
		<header>
    
            <Navbar inverse collapseOnSelect>	
                <Navbar.Header>
			      <Navbar.Brand>
			        <Link to="/">Apologetics 101</Link>
			      </Navbar.Brand>
			     <Navbar.Toggle/>

			    </Navbar.Header>

                <Navbar.Collapse>
			      <Nav pullRight>
			        <LinkContainer to="/"><NavItem className="current">Home</NavItem></LinkContainer>
			        <NavDropdown title="Blog" id="basic-nav-dropdown">
			          <LinkContainer  to="/arguments"><MenuItem>Arguments for the existence of God</MenuItem></LinkContainer>
			          <LinkContainer  to="/christianity"><MenuItem >Exclusivity of Christianity</MenuItem></LinkContainer>
			          <LinkContainer  to="/objections"><MenuItem >Objections and Doubts</MenuItem></LinkContainer>
			        </NavDropdown>
			        <LinkContainer  to="/about"><NavItem>About</NavItem></LinkContainer>
			        <LinkContainer  to="/contact"><NavItem>Contact</NavItem></LinkContainer>
			      </Nav>
			    </Navbar.Collapse>
			</Navbar>
	                 

	    </header>

		)
	}
}

export default Header;