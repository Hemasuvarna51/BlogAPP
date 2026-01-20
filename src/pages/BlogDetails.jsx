import { useParams } from "react-router-dom";
import styled from 'styled-components';


const Div = styled.div`
    width: 600px;    
    margin: auto;
    margin-top: 80px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px 20px;
    background-color: #f9fafb;
    h2 {
        
        margin-bottom: 20px;
    }
    p {
            border: none;   
            padding: 8px 4px;
            font-size: 16px;
            outline: none;
            margin-bottom: 15px;
    }
`;

const Image = styled.img`

  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
   object-position: center;
`;

function BlogDetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <div>Page not found</div>;
  }

  return (
    <Div>
        {blog.image && <Image src={blog.image} alt={blog.title} />}
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>

    </Div>
  ); 
}

export default BlogDetails;