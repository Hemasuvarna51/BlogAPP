import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
  margin-top: 80px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9fafb;

  h3 {
    margin-bottom: 20px;
  }

  input, textarea {
    border: none;
    padding: 8px 4px;
    font-size: 16px;
    margin-bottom: 15px;
    width: 100%;
    border-bottom: 2px solid #0a0b0bff;
    background: transparent;
    outline: none;

    &:focus {
      border-bottom-color: #2563eb;
    }
        
  }

  button {
    width: 120px;
    padding: 10px;
    border-radius: 999px;
    background: blue;
    color: white;
    cursor: pointer;
    border: none;
  }

`;
const BackBtn = styled.button`
    align-self: flex-start;
    margin-bottom: 10px;  
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
      
    `;



function CreatePost({ setBlogs }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

   /*useEffect(() => {
    getBlogs();
  }, []); 

  async function getBlogs() {
    let response = await fetch("https://blog-app-0p3z.onrender.com/api/blogs");
    let data = await response.json();
    console.log(data);
    setBlogs(data);
  }*/

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); 
  };

  const submitHandler = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Session expired. Please login again.");
    navigate("/login");
    return;
  }

  const res = await fetch(
    "https://blog-app-0p3z.onrender.com/api/blogs",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, content }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("POST ERROR:", data);
    alert(data.message || "Unauthorized");
    return;
  }

  setBlogs(prev => [...prev, data]);
  navigate("/");
};




  return (
    <div>
    <BackBtn onClick={() => navigate(-1)}>&larr; Back</BackBtn>
    <Form onSubmit={submitHandler}>
     
      <h3>Create New Post</h3>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={content}
        placeholder="Write your post here..."
        rows="8"
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Publish</button>
    </Form>
    </div>
  );
}

export default CreatePost;
