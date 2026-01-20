import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    margin: 30px auto;
    width: 100%;
    max-width: 800px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 40px;
    background-color: #f9fafb;

    h3 {
        margin-bottom: 15px;
        color: #444;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
        margin-bottom: 20px;
        li {
            margin-bottom: 8px;
            color: #555;
    }


`;

const Title = styled.h3`
    margin: 0 0 16px 0;
`;

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
`;

const BackBtn = styled.button`
    margin: 0 0 10px 0;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #2563eb;
`;

function About(){
        const navigate = useNavigate();

        return (
            <div>
                <BackBtn onClick={() => navigate(-1)}>&larr; Back</BackBtn>
                <Container>
                        <Title>About</Title>
                        <Paragraph>We are building a simple and user-friendly platform designed to share ideas, notes, and blogs seamlessly. This application focuses on providing a smooth writing and reading experience while helping users organize and access content efficiently. Developed using modern web technologies, the goal of this project is to strengthen practical skills in frontend development and create a foundation for real-world applications. We believe in continuous learning, innovation, and building solutions that are easy to use and scalable for the future.</Paragraph>
                        <h3>Categories</h3>
                        <ul>
                             <li>AI</li>
                             <li>Programming</li>
                             <li>Lifestyle</li>
                        </ul>

                        <h3>Popular Posts</h3>
                        <ul>
                            <li>Understanding React Hooks</li>
                            <li>Intro to Generative AI</li>
                            <li>Productivity Hacks for Developers</li>
                         </ul>

                         <h3>Follow Me</h3>
                         <p>Twitter | LinkedIn | GitHub</p>
                         <BackLink to="/">Back to Home</BackLink>      
                </Container>
            </div>
        )
}

export default About;