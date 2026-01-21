import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  margin: auto;
  margin-top: 80px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9fafb;

  h2 {
    margin-bottom: 20px;
  }

  p {
    padding: 8px 4px;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch all blogs
        const res = await fetch(`https://blog-app-0p3z.onrender.com/api/blogs`);
        if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
        const data = await res.json();

        // If URL id exists, use it; otherwise pick the first blog
        const blogFound = id ? data.find(b => b._id === id) : data[0];

        if (!blogFound) throw new Error("Blog not found");
        setBlog(blogFound);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading blog...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>No blog available</div>;

  return (
    <Container>
      {blog.image && <Image src={blog.image} alt={blog.title} />}
      <h2>{blog.title}</h2>
      <article dangerouslySetInnerHTML={{ __html: blog.content }} />
    </Container>
  );
}

export default BlogDetails;
