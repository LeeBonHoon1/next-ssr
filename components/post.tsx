import { Suspense } from "react";
import { motion } from "framer-motion";
// import { useQuery } from "@tanstack/react-query";
// import { getPosts } from "@/server/actions";
import { Posts } from "@/types";
import PostCardItems from "./post-items";
import { HANTEO_NEWS } from "@/constants/member-info";

const Post = () => {
  // const { data: posts } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: getPosts,
  //   select: (data) => data.slice(0, 9),
  // });
  const posts = HANTEO_NEWS;
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
          className="grid grid-cols-1 gap-3 px-5"
        >
          <div className="text-lg font-bold">Hanteo News</div>
          {posts?.map((post: Posts) => (
            <PostCardItems posts={post} key={post.id} />
          ))}
        </motion.div>
      </section>
    </Suspense>
  );
};

export default Post;
