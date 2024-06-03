"use client";
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import BlogPost from "../components/blogPost";
import { BlogsService } from "@services";
import { BlogPostData } from "@/types/interface";

const HomePage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostData[]>([]);
  const [page, setPage] = useState(0);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await BlogsService.getHomeBlogs({
        page,
        limit: 10,
      });
      setBlogPosts(response.data);
    };

    fetchBlogPosts();
  }, [page]);

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} data={post} />
        ))}
      </Box>
    </>
  );
};

export default HomePage;
