// Footer: site footer with links
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-[#8B2214]">
      <div className="container py-8 grid gap-6 md:grid-cols-3 text-sm text-muted pl-2">
        <div>
          <p className="font-semibold text-secondary">JNR Foods (Pvt) Limited</p>
          <p className="mt-2">Quality Cake Toppings & Bakery Essentials.</p>
        </div>
        <nav className="grid gap-2" aria-label="Footer">
          <Link className="hover:text-accent" href="/products">Products</Link>
          <Link className="hover:text-accent" href="/services">Services</Link>
          <Link className="hover:text-accent" href="/contact">Contact</Link>
        </nav>
        <div className="grid gap-2">
          <p>© {new Date().getFullYear()} JNR Foods. All rights reserved.</p>
          <p className="text-xs">Developed by JNR Foods IT Team</p>
        </div>
      </div>
    </footer>
  );
}


