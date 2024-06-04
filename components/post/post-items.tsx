"use client";

import { Content } from "@/types";

import PostCard from "@/components/post/post-card";
import ContentSkeleton from "../skeletons/content-skeleton";

interface PostCardItemsProps {
  content: Content;
  isLoading: boolean;
}

const PostCardItems = ({ isLoading, content }: PostCardItemsProps) => {
  return (
    <div>
      {isLoading ? (
        <ContentSkeleton />
      ) : (
        <PostCard
          id={content.postIdx}
          title={content.postTitle}
          description={content.contents}
          content={content}
        />
      )}
    </div>
  );
};

export default PostCardItems;
