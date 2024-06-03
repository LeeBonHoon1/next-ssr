"use client";

import { Posts } from "@/types";
import { Variants, motion } from "framer-motion";

import PostCard from "@/components/post/post-card";

interface PostCardItemsProps {
  posts: Posts;
}

const PostCardItems = ({ posts }: PostCardItemsProps) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <PostCard
          id={posts.id}
          title={posts.title}
          description={posts.description}
        />
      </motion.div>
    </motion.div>
  );
};

export default PostCardItems;
