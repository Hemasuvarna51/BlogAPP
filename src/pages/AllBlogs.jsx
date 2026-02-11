import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  align-items: start;
  padding: 24px;
`;

const Main = styled.div`
  h2 {
    margin: 0 0 20px 0;
    font-size: 1.75rem;
    font-weight: bold;
    color: #333;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 18px;
  }
`;

const Sidebar = styled.aside`
  margin-top: 55px;
  border: none;
  border-radius: 8px;
  padding: 24px;
  background-color: white;
  h3 {
    margin-bottom: 15px;
    color: #444;
  }
  p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 20px;
    li {
      margin-bottom: 8px;
      color: #555;
    }
  }
`;

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from backend
    fetch("https://blog-app-0p3z.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        // Sort by createdAt descending (latest first)
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sortedBlogs);

        // ✅ Console check to verify latest first
        console.log("ALL BLOGS SORTED:", sortedBlogs);
        if (sortedBlogs.length > 0) {
          console.log("LATEST BLOG:", sortedBlogs[0]);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <Layout>
      <Main>
        <h2>Latest Posts</h2>
        <div className="posts">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </Main>

      <Sidebar>
        <h3>About</h3>
        <p>Welcome to my blog! I share insights on tech, AI, and productivity.</p>

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
      </Sidebar>
    </Layout>
  );
}
