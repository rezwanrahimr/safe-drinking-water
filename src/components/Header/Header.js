import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light"/>
            <Container className='d-flex justify-content-center '>
            <Nav>
            <CustomLink className='me-5' to="/home">HOME</CustomLink>
            <CustomLink className='me-5' to="/reviews">REVIEWS</CustomLink>
            <CustomLink className='me-5' to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink className='me-5' to="/blogs">BLOGS</CustomLink>
            <CustomLink className='me-5' to="/about">ABOUT</CustomLink>
            </Nav>
            </Container>
        </div>
    );
};

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ""}
      </div>
    );
  }

export default Header;