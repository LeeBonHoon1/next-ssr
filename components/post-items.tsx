"use client";

import { Posts } from "@/types";
import PostCard from "@/components/post-card";

interface PostCardItemsProps {
  posts: Posts;
}

const PostCardItems = ({ posts }: PostCardItemsProps) => {
  return (
    <div className="py-3 px-20">
      <PostCard
        id={posts.id}
        title={posts.title}
        description={posts.description}
      />
    </div>
  );
};

export default PostCardItems;
