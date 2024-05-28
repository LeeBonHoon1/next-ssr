"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { getMembers, getPosts } from "@/server/actions";
import { Member, Posts } from "@/types";

import PostCardItems from "@/components/post-items";

export default function Members() {
  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <main>
      <Suspense>
        <section aria-labelledby="members-heading">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-center py-5 gap-3"
          >
            {members?.map((member: Member) => (
              <Link href={`/member/${member.id}`} key={member.id}>
                {member.name}
              </Link>
            ))}
          </motion.div>
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section aria-labelledby="posts-heading">
          <h2 id="posts-heading" className="sr-only">
            Posts
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {posts?.map((post: Posts) => (
              <PostCardItems posts={post} key={post.id} />
            ))}
          </motion.div>
        </section>
      </Suspense>
    </main>
  );
}
