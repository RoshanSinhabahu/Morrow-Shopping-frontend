import { Camera } from "lucide-react";

export default function Footer({ navigate }) {
  return (
    <footer className="bg-ink px-[5.2vw] pb-5 pt-[75px] text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_auto] gap-16">
        <div>
          <button
            className="inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.04em]"
            onClick={() => navigate("home")}
          >
            <span className="grid size-[25px] place-items-center rounded-full border border-white font-serif text-sm font-medium">M</span> morrow
          </button>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Technology for the
            <br />
            life you actually live.
          </p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-3.5 text-sm text-white/60 [&>p]:mb-1.5 [&>p]:font-mono [&>p]:text-sm [&>p]:uppercase [&>p]:text-white">
            <p>Explore</p>
            <button className="text-left hover:text-white" onClick={() => navigate("shop")}>Shop all</button>
            <button className="text-left hover:text-white" onClick={() => navigate("journal")}>Journal</button>
            <button className="text-left hover:text-white" onClick={() => navigate("about")}>Our story</button>
          </div>
          <div className="flex flex-col gap-3.5 text-sm text-white/60 [&>p]:mb-1.5 [&>p]:font-mono [&>p]:text-sm [&>p]:uppercase [&>p]:text-white">
            <p>Help</p>
            <button className="text-left hover:text-white">Shipping & returns</button>
            <button className="text-left hover:text-white">Contact us</button>
            <button className="text-left hover:text-white">FAQ</button>
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-white/60">
          <Camera size={19} />
          <span>@morrowobjects</span>
        </div>
      </div>
      <div className="mx-auto mt-[70px] flex max-w-[1400px] justify-between border-t border-white/15 pt-4 text-sm leading-relaxed text-white/45">
        <span>© 2026 Morrow Objects</span>
        <span>Made with intention in Morrow Company · Sri Lanka</span>
        <span>Privacy &nbsp; Terms</span>
      </div>
    </footer>
  );
}
