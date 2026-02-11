import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 30px;
  background: rgb(213, 222, 245);
  border-radius: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 200px;     
  @media(max-width: 600px) {
  height: 150px; 
  object-fit: cover;
  border-radius: 8px;
  object-position: center; 
`;

const Content = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

function BlogCard({blog}){

    

    return(
        <Card>
            {blog.image && <Image src={blog.image} alt={blog.title} />}
            <h3>{blog.title}</h3>
            <Content
              dangerouslySetInnerHTML={{
                __html: blog.content
            }}
            />

            <Link to={`/blog/${blog._id}`}>Read More</Link>

            
        </Card>
    )
}


export default BlogCard;