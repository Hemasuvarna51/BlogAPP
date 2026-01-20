import { Link } from "react-router-dom";
import styled from 'styled-components';
import {FaLinkedin} from 'react-icons/fa';

const ContactContainer = styled.div`
    width: 800px;
    margin: auto;
    margin-top: 80px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px 20px;
    background-color: #f9fafb;
    h3 {
        margin-bottom: 20px;
    }

    Link {
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        color: #2563eb;
    }
    p {

        border: none;
        padding: 8px 4px;
        font-size: 16px;
        outline: none;
        margin-bottom: 15px;
    }
    a{
        text-decoration: none;
        color: #2563eb;
        font-size: 16px;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 8px 4px;
    li {
        margin-bottom: 10px;

    }
`;

function Contact(){
    return(
        <ContactContainer>
            <h3>Contact Page</h3>
            <p>We’d love to hear from you! If you have questions, feedback, or suggestions related to this application, 
                feel free to reach out. Your input helps us improve and build better user experiences. Whether it’s a technical 
                query or a general suggestion, we are always open to collaboration and learning.</p>
            <Ul>
                <li>Email: <a href="mailto:hemasuvarna51@gmail.com" target="_blank" rel="noopener noreferrer">hemasuvarna51@gmail.com</a></li>
                <li>Phone: +91 9988776655</li>
                <li>Address: 123, Main Street, Anakapalle, India</li>

            </Ul>
            {/*<Link to="/">Go back to Home</Link>*/}
            <a href = 'https://www.linkedin.com/in/hemasuvarna512004/' target='_blank' rel='noopener noreferrer'>LinkedIn Profile</a>
            <FaLinkedin size={20} style={{ marginLeft: '10px', verticalAlign: 'middle', color: '#0077b5' }}/>

        </ContactContainer>
    )
}

export default Contact;