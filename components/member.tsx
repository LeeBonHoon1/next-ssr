import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";

import { HANTEO_MAMBER } from "@/types";

import Image from "next/image";
import { HANTEO_MEMBERS } from "@/constants/member-info";
const Member = () => {
  return (
    <Suspense>
      <section aria-labelledby="members-heading">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="px-5 py-12"
        >
          <div className="py-6 text-lg font-bold antialiased">
            Hanteo Developers
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 content-center">
            {HANTEO_MEMBERS?.map((member: HANTEO_MAMBER) => (
              <Link
                href={{
                  href: `/member/${member.id}`,
                }}
                as={`/member/${member.id}`}
                key={member.id}
                className="flex items-center gap-3"
              >
                <div className="relative w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
                  <Image
                    src={"/images/1.png"}
                    fill
                    alt="member-image"
                    className="rounded-full hover:animate-pulse hover:ring ring-rose-300"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-md antialiased">
                    {member.name}
                  </div>
                  <div className="text-slate-600 text-[12px] dark:text-slate-400 antialiased">
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
