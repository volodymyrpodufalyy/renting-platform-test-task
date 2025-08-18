import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { useTheme } from "../../providers/ThemeProvider";
import WalletConnect from "../walletConnect/index";
import "./navbar.css";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <button
            type="button"
            aria-pressed={theme === "dark"}
            aria-label="Toggle dark and light theme"
            className="theme-toggle ms-3"
            onClick={toggleTheme}
          >
          {theme === "light" ? (
            <i className="fa-solid fa-moon" />
          ) : (
            <i className="fa-solid fa-sun" />
          )}
          </button>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <WalletConnect />
      </Container>
    </Navbar>
  );
}

export default NavBar;
