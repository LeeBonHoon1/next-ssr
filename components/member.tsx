import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { HANTEO_MEMBERS } from "@/constants/member-info";

import { HANTEO_MAMBER } from "@/types";
// import { useQuery } from "@tanstack/react-query";
// import { getMembers } from "@/server/actions";
import Image from "next/image";

const Member = () => {
  // const { data: members } = useQuery({
  //   queryKey: ["members"],
  //   queryFn: getMembers,
  // });
  const members = HANTEO_MEMBERS;
  return (
    <Suspense>
      <section aria-labelledby="members-heading">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="px-5 py-10"
        >
          <div className="py-5 text-lg font-bold">Hanteo Develops</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 content-center">
            {members?.map((member: HANTEO_MAMBER) => (
              <Link
                href={`/member/${member.id}`}
                key={member.id}
                className="flex items-center gap-3"
              >
                <div className="relative w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
                  <Image
                    src={"/images/1.png"}
                    fill
                    alt="member-image"
                    className="rounded-full hover:animate-pulse hover:ring ring-slate-400 hover:rotate-12"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-md">{member.name}</div>
                  <div className="text-slate-600 text-[12px]">
                    {member.role}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </Suspense>
  );
};

export default Member;
