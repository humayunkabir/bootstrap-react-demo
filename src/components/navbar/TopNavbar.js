import React from 'react';
import { Button, Navbar, NavbarNav, NavLink } from 'bootstrap-react';

const TopNavbar = () => {
  return (
    <Navbar brand="🌴 falcon" color="light" container utilities="bg-light">
      <NavbarNav utilities="mr-auto">
        <NavLink active href="#">
          Homes
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#" disabled>
          Disabled
        </NavLink>
      </NavbarNav>
      <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button color="primary" type="submit">
          Search
        </Button>
      </form>
    </Navbar>
  );
};

export default TopNavbar;
