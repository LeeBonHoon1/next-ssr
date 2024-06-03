import { Suspense } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { getPosts } from "@/server/actions";
import { Posts } from "@/types";

import PostCardItems from "@/components/post/post-items";

const Post = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="sr-only">
          Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 px-5">
          <div className="text-lg font-bold antialiased">Hanteo News</div>
          {posts?.map((post: Posts) => (
            <PostCardItems posts={post} key={post.id} />
          ))}
        </div>
      </section>
    </Suspense>
  );
};

export default Post;
