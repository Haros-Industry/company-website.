import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage() {
    return (
        <section className="mx-auto min-h-[65vh] max-w-7xl px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                Contact
            </p>
            <h1 className="mt-5 text-4xl font-bold sm:text-6xl">Get in touch</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                For company and product enquiries, contact details will be published
                here as Haros Industry prepares for its public launch.
            </p>
        </section>
    );
}