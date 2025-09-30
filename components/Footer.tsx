// Footer: Modern site footer
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-[#8B2214] text-white">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold">JNR Foods (Pvt) Limited</h3>
          <p className="mt-2 text-gray-200">
            Quality Cake Toppings & Bakery Essentials.
          </p>
        </div>

        {/* Footer Nav */}
        <nav className="flex flex-col gap-2" aria-label="Footer">
          <Link className="hover:text-yellow-300 transition-colors" href="/products">
            Products
          </Link>
          <Link className="hover:text-yellow-300 transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-yellow-300 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Copyright + Social */}
        <div className="flex flex-col gap-3">
          <p>© {new Date().getFullYear()} JNR Foods. All rights reserved.</p>
          <p className="text-xs text-gray-300">
            Developed by JNR Foods IT Team
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-yellow-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-yellow-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-yellow-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-yellow-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
