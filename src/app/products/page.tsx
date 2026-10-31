import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
};

export default function ProductsPage() {
    return (
        <section className="mx-auto min-h-[65vh] max-w-7xl px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                Our portfolio
            </p>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">Products</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We’re developing software products under the Haros Industry name.
                Product details will be published here as they’re ready to share.
            </p>

            <div className="mt-12 rounded-2xl border border-dashed border-white/20 p-8">
                <p className="font-semibold">The portfolio is in development.</p>
                <p className="mt-2 text-slate-400">
                    There are no public product announcements yet.
                </p>
            </div>
        </section>
    );
}