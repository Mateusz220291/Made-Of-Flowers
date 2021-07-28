import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Nav = styled.nav`
  background: var(--maincolor);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 998;
  transition: 0.8s all ease;

  @media screen and(min-width: 960px) {
    transition: none;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 70px;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  img {
    height: 55px;
  }
`;

const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  align-items: center;
  list-style: none;
  text-align: center;
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : "100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  &:hover {
    color: var(--secondcolor);
  }
  &.active {
    border-bottom: 4px solid white;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  margin-left: 50px; ;
`;
const Social = styled.a`
  color: #fff;
  font-size: 24px;

  :hover {
    color: red;
  }
`;

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src="" alt="logo"></img>
            </NavLogo>
            <MobileIcon>
              <FaBars onClick={toggle} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="aboutMe"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  {" "}
                  O mnie
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="offer"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Oferta
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Galeria
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Kontakt
                </NavLinks>
              </NavItem>
              <Socials>
                <Social
                  href="https://www.facebook.com/Z-kwiat%C3%B3w-uszyte-134634411672850"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </Social>
                <Social
                  href="https://www.instagram.com/zkwiatowuszyte/?fbclid=IwAR2etgOeP7mR198DTvux45JoKKoVQlqxUggSJ593z1LyLNbVj5voWr6Xzg8"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Social>
              </Socials>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
