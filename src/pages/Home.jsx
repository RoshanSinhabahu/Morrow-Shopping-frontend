import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Zap } from "lucide-react";
import { collections, products } from "../data/catalog";
import Newsletter from "../components/Newsletter";

export default function Home({ navigate, addToCart }) {
  return (
    <>
      <section className="relative flex min-h-[590px] h-[min(720px,calc(100vh-110px))] items-center overflow-hidden px-[11vw] py-[7vw] text-[#fffaf3] max-md:min-h-[650px] max-md:h-[calc(100vh-98px)] max-md:items-end max-md:px-[8vw] max-md:py-[12vw]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,20,20,.75),rgba(18,20,20,.2)),url('https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="relative z-[1] max-w-[565px]">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-white/70">New release · 2026</p>
          <h1 className="mb-7 text-[clamp(55px,7.3vw,105px)] font-medium leading-[0.96] tracking-[-0.05em]">
            Technology,
            <br />
            <em>considered.</em>
          </h1>
          <p className="mb-8 max-w-[340px] leading-[1.65] text-white/75">
            Beautifully made essentials for a life in motion. Meet the new Arc
            Phone.
          </p>
          <button
            className="inline-flex min-h-[46px] items-center gap-6 bg-[#fffaf3] px-5 text-sm text-ink transition-transform hover:-translate-y-0.5"
            onClick={() => navigate("product/arc-phone")}
          >
            Discover Arc Phone <ArrowRight size={17} />
          </button>
        </div>
        <div className="absolute bottom-11 right-[10vw] z-[1] flex w-[210px] items-start gap-4 border-t border-white/40 pt-3 max-md:hidden">
          <span className="font-mono text-sm opacity-70">01</span>
          <div>
            <strong>Arc Phone</strong>
            <small className="mt-1 block text-sm opacity-65">Meet your new everyday</small>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1240px] grid-cols-2 gap-[8vw] px-[5.2vw] py-[120px] max-md:grid-cols-1 max-md:gap-10 max-md:px-[8vw] max-md:py-20">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">Why Morrow</p>
          <h2 className="text-[clamp(40px,4.5vw,64px)] font-medium leading-[0.96] tracking-[-0.05em]">
            Less noise.
            <br />
            <span>More signal.</span>
          </h2>
        </div>
        <div className="max-w-[380px] self-end leading-[1.75] text-muted">
          <p>
            We believe the best technology fades into your life. Every Morrow
            product is designed to feel intuitive, look timeless, and last
            longer than the next upgrade cycle.
          </p>
          <button className="mt-2 inline-flex items-center gap-4 border-b border-ink pb-1.5 text-sm" onClick={() => navigate("about")}>
            Our point of view <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-[5.2vw] pb-[120px] max-md:px-[8vw] max-md:pb-20">
        <div className="mb-10 flex items-end justify-between max-md:block">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">Explore the collection</p>
            <h2 className="text-[clamp(40px,4.5vw,64px)] font-medium leading-[0.96] tracking-[-0.05em]">
              Find your <em>frequency.</em>
            </h2>
          </div>
          <button className="inline-flex items-center gap-4 border-b border-ink pb-1.5 text-sm max-md:mt-5" onClick={() => navigate("shop")}>
            View all products <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1 max-md:gap-2.5">
          {collections.map((item, index) => (
            <motion.button
              whileHover={{ y: -5 }}
              className="relative h-[425px] overflow-hidden text-left text-white max-md:h-[360px]"
              key={item.title}
              onClick={() => navigate(item.path)}
            >
              <img className="size-full object-cover transition-transform duration-500 hover:scale-105" src={item.image} alt={item.title} />
              <div className="absolute inset-x-7 bottom-6 z-[1]">
                <span className="font-mono text-sm opacity-70">0{index + 1}</span>
                <h3 className="my-5 mb-1.5 font-serif text-[27px]">{item.title}</h3>
                <p className="text-sm opacity-80">{item.sub}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-[8vw] px-[5.2vw] pb-[120px] max-md:grid-cols-1 max-md:gap-10 max-md:px-[8vw]">
        <div className="relative bg-[#d7d4cd]">
          <img className="block aspect-[1/1.05] w-full object-cover mix-blend-multiply" src={products[0].image} alt="Arc Phone" />
          <div className="absolute right-[-22px] top-[15%] flex size-[88px] rotate-[10deg] flex-col items-center justify-center gap-1 rounded-full bg-orange text-center font-mono text-sm text-white">
            <Zap size={15} fill="currentColor" /> Made for now
          </div>
        </div>
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">The everyday icon</p>
          <h2 className="text-[clamp(40px,4.5vw,64px)] font-medium leading-[0.96] tracking-[-0.05em]">Arc Phone</h2>
          <p className="max-w-[400px] text-[19px] leading-[1.55] text-muted">
            A calmer kind of powerful. Titanium frame, all-day battery, and a
            camera that sees the way you do.
          </p>
          <div className="my-7 flex items-center gap-5 font-mono">
            <strong>$899</strong>
            <span>Available in 3 finishes</span>
          </div>
          <button
            className="inline-flex min-h-[46px] items-center gap-6 bg-ink px-5 text-sm text-[#fffaf3]"
            onClick={() => {
              addToCart(products[0]);
              navigate("product/arc-phone");
            }}
          >
            Add to bag <ShoppingBag size={17} />
          </button>
          <button
            className="ml-5 inline-flex items-center gap-4 border-b border-ink pb-1.5 text-sm"
            onClick={() => navigate("product/arc-phone")}
          >
            View details <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
