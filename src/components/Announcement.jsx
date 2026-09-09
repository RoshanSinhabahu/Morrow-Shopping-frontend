import { ArrowRight, Sparkles } from "lucide-react";

export default function Announcement() {
  return (
    <div className="flex h-[34px] items-center justify-between bg-orange px-[5.2vw] text-xs md:text-sm tracking-[0.04em] text-[#fff8f2]">
      <span className="flex items-center gap-2">
        <Sparkles size={14} /> The new Arc Phone is here
      </span>
      <a className="flex items-center gap-2 text-inherit underline underline-offset-4" href="#/product/arc-phone">
        Explore the drop <ArrowRight size={18} />
      </a>
    </div>
  );
}
