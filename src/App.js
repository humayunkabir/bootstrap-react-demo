import React from 'react';
import './App.css';
import { Button, Navbar, NavbarNav, NavLink } from 'bootstrap-react';
import Dashboard from './components/dashboard/Dashboard';
// const colors = [
//   'primary',
//   'success',
//   'warning',
//   'info',
//   'danger',
//   'light',
//   'dark',
//   'secondary',
// ];

function App() {
  return (
    <>
      <Navbar
        brand="🌴 Bootstrap React Demo"
        color="light"
        container
        utilities="bg-light"
      >
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
      <Dashboard />
    </>
  );
}

export default App;
