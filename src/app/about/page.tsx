import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <section className="mx-auto min-h-[65vh] max-w-7xl px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                About Haros Industry
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
                One company. A growing collection of software.
            </h1>

            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-300">
                <p>
                    Haros Industry is an independent software company focused on
                    creating and developing digital products.
                </p>
                <p>
                    Our long-term direction is to build a portfolio of software that
                    serves different needs while sharing a commitment to clarity,
                    usefulness, and thoughtful development.
                </p>
                <p>
                    We’ll share more about our products and work as they become ready
                    for the public.
                </p>
            </div>
        </section>
    );
}