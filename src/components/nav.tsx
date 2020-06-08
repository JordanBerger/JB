import Link from 'next/link';
import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';

const Navi = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (): void => setIsOpen(!isOpen);
  const leftNav = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
  ];
  return (
    <Row>
      <Navbar expand="sm" color="dark" dark sticky="top" className="w-100">
        <NavbarToggler onClick={toggle} aria-controls="navbar" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {leftNav.map((nav, i) => {
              return (
                <NavItem key={i}>
                  <Link href={nav.href} passHref>
                    <NavLink>{nav.title}</NavLink>
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </Row>
  );
};

export default Navi;
