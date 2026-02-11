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
        border: 1.5px solid #8b8e92ff;
        background: transparent;
        color: #0a0b0bff;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 15px;

        &:hover {
            background-color: #076bedff;
    }
    }
`;

function Login() {

    const [email, setEmail] = useState("");
    const [text,setText] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    

    const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch(
    "https://blog-app-0p3z.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await res.json();
  console.log("RESPONSE 👉", data);

  if (!res.ok) {
    alert(data.message || "Login failed");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("isAuth", "true");

  navigate("/createpost");
}


    return (
       <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type = "text" value = {text} placeholder='Username' onChange ={(e) => setText(e.target.value)}></input>
        <br/>
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value) }  ></input>
        <br/>
        <input type="password" value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
        <br/>
        <button type="submit">LogIn</button>

        <p>Don't have an account?
             <span style={{color: 'blue', cursor: 'pointer'} }
              onClick={() => navigate('/signup')}>Sign Up</span>
        </p>   
       </Form>
    )
}  

export default Login;