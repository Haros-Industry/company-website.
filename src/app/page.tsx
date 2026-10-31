import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
            Independent software company
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Building software for what comes next.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Haros Industry is building a collection of software products
            designed to help people and businesses do more with technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-200"
            >
              Explore our products
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50"
            >
              About the company
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
          <div>
            <p className="text-sm text-lime-300">01 / Purpose</p>
            <h2 className="mt-3 text-xl font-semibold">Useful by design</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We aim to build software around real needs, not complexity for
              its own sake.
            </p>
          </div>

          <div>
            <p className="text-sm text-lime-300">02 / Approach</p>
            <h2 className="mt-3 text-xl font-semibold">Built to grow</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Each product is part of a broader effort to make thoughtful,
              dependable software.
            </p>
          </div>

          <div>
            <p className="text-sm text-lime-300">03 / Direction</p>
            <h2 className="mt-3 text-xl font-semibold">A growing portfolio</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Haros Industry is designed to support multiple products over
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
            What we’re building
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            A home for software products with a clear purpose.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Our product portfolio is being developed. Visit the products page
            for updates as projects become ready to share.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex font-semibold text-lime-300 hover:text-lime-200"
          >
            View products <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}