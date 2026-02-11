import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo2.webp';

const Navbars= styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: #565ef8ff;
`;

const NavLogo= styled.div`
    width : 40px;
    height : 40px;

`;
const LogoImage = styled.img`
  width: 40px;
  height: 35px;
  object-fit: contain;
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 18px ;
  font-weight: bold;
    color: white;
  padding-top: 8px;
`;
const NavLinks = styled.nav`
     display: flex;
     align-items: center;
     gap: 25px;

     a{
        text-decoration: none;
        color: white;
        margin: 0 7px;
    }
`;

const Nav = styled.div`
    a{
        text-decoration: none;  
     
        margin: 0 7px;
    }
   
`;
const Link1 = styled(Link)`
    padding: 6px 10px;
    background-color: white;            
    color: black;
    border-radius: 10px;
    text-decoration: none;
`;  
const Link2 = styled(Link)`
    padding: 6px 10px;
    background-color: #fe0909ff;
    color: white;
    border-radius: 10px;
    text-decoration: none;
`;

  


function NavBar() {
    return(

        <>
            <Navbars>
                <NavLogo>
                    <Title>BlogApp</Title>
                </NavLogo>
                <NavLinks>
                    <Link to="/">Home</Link> {" "}
                    <Link to="/allblogs">All Blogs</Link> {" "}
                    <Link to="/about">About</Link> {" "}
                    <Link to="/contact">Contact</Link> {" "}
                </NavLinks>
                <Nav>
                    <Link1 to="/login">Login</Link1> {" "}
                    <Link2 to="/signup">SignUp</Link2> {" "}
                </Nav>
               
            </Navbars>
        </>
    )
}
export default NavBar;