import { Nav } from 'react-bootstrap';

const HeaderFixed = () => {
  return (
    <Nav className="navbar">
      <a href=""></a>
      <ul className="nav-list">
        <li>
          <a href="#section-about">About</a>
        </li>
        <li>
          <a href="#section-project">Works</a>
        </li>
        <li>
          <a href="#section-contacts">Contacts</a>
        </li>
      </ul>
    </Nav>
  );
};

export default HeaderFixed;
