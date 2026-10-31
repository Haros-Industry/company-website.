import Link from "next/link";

const links = [
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
    return (
        <header className="border-b border-white/10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    HAROS <span className="text-lime-300">INDUSTRY</span>
                </Link>

                <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm text-slate-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-lime-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}