import { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";
import { getContent, getPosts } from "@/server/actions";
import { Content, Posts } from "@/types";

import PostCardItems from "@/components/post/post-items";

const Post = () => {
  const { data: content, isLoading: contentLoading } = useQuery({
    queryKey: ["content"],
    queryFn: getContent,
    select: (data) => data.resultData.postList.slice(0, 10),
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="sr-only">
          Posts
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-8 px-5"
        >
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold antialiased">Hanteo News</div>
          </div>
          {content?.map((content: Content) => (
            <PostCardItems
              key={content.postIdx}
              isLoading={contentLoading}
              content={content}
            />
          ))}
        </motion.div>
      </section>
    </Suspense>
  );
};

export default Post;
