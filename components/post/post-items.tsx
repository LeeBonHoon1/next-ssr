"use client";

import { Posts } from "@/types";
import PostCard from "@/components/post/post-card";

interface PostCardItemsProps {
  posts: Posts;
}

const PostCardItems = ({ posts }: PostCardItemsProps) => {
  return (
    <PostCard
      id={posts.id}
      title={posts.title}
      description={posts.description}
    />
  );
};

export default PostCardItems;
