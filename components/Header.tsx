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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
  {/* Top announcement bar */}
      <div className="w-full bg-[#8B2214] text-white text-left px-6 py-1.5 text-xs font-bold">
        <p>Top quality cake toppings delivered fresh.</p>
      </div>

      {/* Main header */}
      <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md border-b border-gray-200"
      : "bg-white"
  }`}
>
  <div className="mx-auto px-3 sm:px-4 lg:px-4 flex w-full">
    <div className="flex items-center justify-between h-20 w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <Image src="/jnr.png" alt="JNR Foods" width={80} height={80} />
        <div className="flex flex-col">
          <span className="font-bold text-2xl text-primary">JNR Foods</span>
          <span className="text-xs text-gray-500 -mt-1">
            PREMIUM QUALITY PRODUCTS
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center justify-center flex-1 space-x-6 w-full"
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

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-accent hover:text-white">
          <Search size={18} />
        </button>
        <Link
          href="/account"
          className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white"
        >
          <User size={18} />
        </Link>
        <Link
          href="/cart"
          className="relative flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-black/90"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline text-sm ml-2">Cart</span>
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </Link>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-accent hover:text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>
  </div>
</header>
    </>
  );
}
