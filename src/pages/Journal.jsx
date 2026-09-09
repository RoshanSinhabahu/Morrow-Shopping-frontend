import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stories } from "../data/catalog";

export default function Journal({ navigate }) {
  return (
    <section className="mx-auto max-w-[1400px] px-[5.2vw] py-[105px] pb-[130px] max-md:px-[8vw] max-md:py-[75px]">
      <div className="mb-20 max-w-[600px]">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">The Morrow journal</p>
        <h1 className="mb-7 text-[clamp(55px,7.3vw,105px)] font-medium leading-[0.96] tracking-[-0.05em]">
          Ideas for a life
          <br />
          <em>well lived.</em>
        </h1>
        <p className="max-w-[430px] leading-[1.75] text-muted">
          Stories, guides, and conversations about the things that make
          technology feel more human.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 max-md:block">
        {stories.map((story, index) => (
          <motion.article
            className={index === 0 ? "col-span-2 mb-12 grid grid-cols-2 gap-8 max-md:block" : "mb-12"}
            key={story.title}
            whileHover={{ y: -5 }}
          >
            <img className="h-[380px] w-full object-cover" src={story.image} alt="" />
            <div className="pt-5">
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">{story.type} · 06.12.25</p>
              <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-[0.96] tracking-[-0.05em]">{story.title}</h2>
              <button className="inline-flex items-center gap-4 border-b border-ink pb-1.5 text-sm" onClick={() => navigate("about")}>
                Read story <ArrowRight size={16} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
