import { Suspense } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getTech } from "@/server/actions";
import { Tech } from "@/types";
import TechCard from "./tech-card";

const Techs = () => {
  const { data: techs } = useQuery({
    queryKey: ["tech"],
    queryFn: getTech,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section aria-labelledby="techs-heading">
        <h2 id="techs-heading" className="sr-only">
          Hanteo Tech search
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-3 px-5"
        >
          {techs?.map((tech: Tech) => (
            <TechCard
              key={tech._id}
              category={tech.category}
              title={tech.title}
              subtitle={tech.subtitle}
              date={tech.date || ""}
              tag={tech.tag}
            />
          ))}
        </motion.div>
      </section>
    </Suspense>
  );
};

export default Techs;
