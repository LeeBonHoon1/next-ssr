"use client";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import routerStore from "@/store";

import Post from "@/components/post/post";
import Member from "@/components/member";
import Techs from "@/components/tech/tech";
import { useUser } from "@clerk/nextjs";

export default function MainContentPage() {
  const { currentRouter } = routerStore();
  const { width, height } = useWindowSize();
  const { isLoaded } = useUser();

  return (
    <main className="pb-24 px-2 lg:px-96">
      {currentRouter === "/" ? (
        <>
          <Member />
          <Post />
        </>
      ) : (
        <Techs />
      )}
      {isLoaded && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
        />
      )}
    </main>
  );
}
