export default function About() {
  return (
    <section>
      <div className="flex h-[650px] flex-col justify-end bg-[linear-gradient(90deg,rgba(18,20,20,.75),rgba(18,20,20,.2)),url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center px-[11vw] py-[7vw] text-[#fffaf3] max-md:h-[570px] max-md:px-[8vw] max-md:py-[12vw]">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-white/70">Our story</p>
        <h1 className="text-[clamp(55px,7.3vw,105px)] font-medium leading-[0.96] tracking-[-0.05em]">
          Good design is
          <br />
          <em>a daily ritual.</em>
        </h1>
      </div>
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-[8vw] px-[5.2vw] py-[120px] max-md:grid-cols-1 max-md:gap-6 max-md:px-[8vw] max-md:py-20">
        <p
          className="mb-4 inline-block bg-cover bg-center px-4 py-3 font-mono text-sm uppercase tracking-[0.14em] text-white shadow-sm"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,33,31,.58), rgba(34,33,31,.58)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85')",
          }}
        >
          The Morrow way
        </p>
        <h2 className="text-[clamp(40px,4.5vw,64px)] font-medium leading-[0.96] tracking-[-0.05em]">
          We make technology
          <br />
          feel a little more <em>human.</em>
        </h2>
        <p className="max-w-[520px] leading-[1.75] text-muted">
          Morrow began with a simple question: what if our devices could give
          back as much as they take? We obsess over the details that make an
          object feel like yours, from the weight in your hand to the way it
          fits into the rhythm of your day.
        </p>
        <img
          className="h-[120px] w-full object-cover max-md:h-[180px]"
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
          alt="A calm, considered workspace"
        />
        <div className="col-span-2 mt-8 grid grid-cols-3 gap-6 max-md:col-span-1 max-md:grid-cols-1">
          <div className="rounded-4xl border border-line bg-white/60 p-7 shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-lg">
            <strong className="font-mono text-sm text-orange">01</strong>
            <h3 className="my-4 text-xl font-medium">Considered</h3>
            <p className="text-muted">We edit relentlessly so every detail earns its place.</p>
          </div>
          <div className="rounded-4xl border border-line bg-white/60 p-7 shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-lg">
            <strong className="font-mono text-sm text-orange">02</strong>
            <h3 className="my-4 text-xl font-medium">Enduring</h3>
            <p className="text-muted">We design for the long view, not the next news cycle.</p>
          </div>
          <div className="rounded-4xl border border-line bg-white/60 p-7 shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-lg">
            <strong className="font-mono text-sm text-orange">03</strong>
            <h3 className="my-4 text-xl font-medium">Open</h3>
            <p className="text-muted">We believe the best ideas get better when shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
