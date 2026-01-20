import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: auto;
    margin-top: 100px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px 30px; 
    background-color: #f9fafb;
   
    h2{
    margin-bottom: 20px;}
    input {
         border: none;
         border-bottom: 2px solid #0a0b0bff;
         padding: 8px 4px;
         font-size: 16px;
         outline: none;
         margin-bottom: 15px;

         &:focus {
         border-bottom-color: #2563eb;
  }

    }       
    button {
        width: 140px;
        padding: 10px;
        border-radius: 999px;
        border: 1.5px solid #545252ff;
        background: transparent;
        color: #1d1d1dff;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 15px;

        &:hover {
            background-color: #076bedff;
    }
    }
`;


function SignUp() {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
        'https://blog-app-0p3z.onrender.com/api/auth/register',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: text,
                email,
                password,
            }),
        }
    );

    const data = await res.json();
    console.log(data);

    if (res.ok) {
        navigate('/login');
    } else {
        alert(data.message || 'Registration failed');
    }
};

    return (
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type = "text"
                value={text}
                onChange = {(e) => setText(e.target.value)}  
                placeholder='Username'>
        </input>
        <br/>
        <input type = "email" 
                value={email} 
                onChange = {(e) => setEmail(e.target.value)}
                placeholder='Email'>
        </input> 
            <br/>
        <input type = "password" 
                value = {password}
                onChange = {(e)=> setPassword(e.target.value)} 
                placeholder='Password'>
        </input>
        <br/>
        <button type = "submit">SignUp</button>
        <p>Already have an account?
          <span style={{color: 'blue', cursor: 'pointer'}}
            onClick={() => navigate('/login')}> Log In</span>
        </p>
      </Form>
       
            
          
    )
}  

export default SignUp;