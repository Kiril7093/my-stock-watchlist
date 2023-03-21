import { Nav, NavLink } from 'react-bootstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';

const fontStyle= { fontSize: '20px', fontWeight: 'bold', color: 'grey' };

export const TabNav = () => {


  return (
    <Nav variant="tabs" defaultActiveKey="/" className="mb-3">
      <Nav.Item>
        <NavLink exact as={RRNavLink} to="/" activeClassName="active" aria-current="page">
        <span style={fontStyle}>Home</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/catalog" activeClassName="active" aria-current="page">
        <span style={fontStyle}>Catalog</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/about" activeClassName="active" aria-current="page">
        <span style={fontStyle}>About</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/register" activeClassName="active" aria-current="page">
        <span style={fontStyle}>Register</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/login" activeClassName="active" aria-current="page">
        <span style={fontStyle}>Login</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/explorer" activeClassName="active" aria-current="page">
        <span style={fontStyle}>Stock Explorer</span>
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink as={RRNavLink} to="/watchlist" activeClassName="active" aria-current="page">
        <span style={fontStyle}>My Watchlist</span>
        </NavLink>
      </Nav.Item>



    </Nav>
  );
}
