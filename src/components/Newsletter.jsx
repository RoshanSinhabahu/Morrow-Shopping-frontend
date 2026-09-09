import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mx-auto grid max-w-[1240px] grid-cols-2 gap-[8vw] px-[5.2vw] py-[120px]">
      <div>
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-muted">Stay in the loop</p>
        <h2 className="text-[clamp(40px,4.5vw,64px)] font-medium leading-[0.96] tracking-[-0.05em]">
          Good things,
          <br />
          <em>occasionally.</em>
        </h2>
      </div>
      <form className="self-end" onSubmit={(event) => event.preventDefault()}>
        <label className="mb-3 block text-sm" htmlFor="email">Your email address</label>
        <div className="flex border-b border-ink">
          <input className="w-full border-0 bg-transparent py-2 outline-none" id="email" type="email" placeholder="you@example.com" />
          <button className="py-2 pl-4" aria-label="Subscribe">
            <ArrowRight size={19} />
          </button>
        </div>
        <small className="mt-3 block text-sm text-muted">By subscribing, you agree to our terms. No noise, ever.</small>
      </form>
    </section>
  );
}
