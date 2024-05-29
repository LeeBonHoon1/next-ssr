"use client";

import Post from "@/components/post";
import Member from "@/components/member";

export default function MainContentPage() {
  return (
    <main className="pb-24 px-2 lg:px-96">
      <Member />
      <Post />
    </main>
  );
}
