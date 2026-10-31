import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Haros Industry</p>

                <div className="flex gap-5">
                    <Link href="/products" className="hover:text-white">
                        Products
                    </Link>
                    <Link href="/about" className="hover:text-white">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}