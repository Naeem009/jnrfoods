"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close menu on resize >= lg and on Escape
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-[#8B2214] text-white text-left px-4 py-1.5 text-xs font-bold">
        <p>Top quality cake toppings delivered fresh.</p>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white"
        }`}
      >
        <div className="mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                {/* using fill so CSS width controls responsiveness */}
                <Image src="/jnr.png" alt="JNR Foods" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg sm:text-2xl text-primary">JNR Foods</span>
                <span className="text-[10px] sm:text-xs text-gray-500 -mt-0.5">
                  PREMIUM QUALITY PRODUCTS
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center justify-center flex-1 space-x-6"
              aria-label="Main"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-sm transition ${
                    pathname === item.href
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-gray-700 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-accent hover:text-white focus:outline-none"
              >
                <Search size={18} />
              </button>

              <Link
                href="/account"
                aria-label="Account"
                className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white focus:outline-none"
              >
                <User size={18} />
              </Link>

              <Link
                href="/cart"
                className="relative flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-black/90 focus:outline-none"
                aria-label="Cart"
              >
                <ShoppingCart size={18} />
                <span className="hidden sm:inline text-sm ml-2">Cart</span>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="lg:hidden inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-accent hover:text-white focus:outline-none"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel (slide/dropdown) */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-md transform transition-all duration-200 ${
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {/* Links */}
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-3 px-2 rounded-md text-base font-semibold ${
                  pathname === item.href ? "text-accent bg-accent/10" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Quick actions inside mobile menu */}
            <div className="flex items-center gap-3 pt-3 border-t mt-2">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center gap-2 py-2 px-3 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <Search size={16} /> Search
              </Link>
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 py-2 px-3 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <User size={16} /> Account
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
