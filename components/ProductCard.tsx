// ProductCard: displays a product summary with add-to-cart
"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <div className="group rounded-xl shadow-card bg-white overflow-hidden border hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={product.images?.[0] || "/products/1.jpg"}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={product.featured}
          />
        </div>
      </Link>
      <div className="p-4 grid gap-2">
        <Link href={`/products/${product.slug}`} className="font-medium line-clamp-2 hover:text-accent">
          {product.title}
        </Link>
        <p className="text-muted text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold">{new Intl.NumberFormat(undefined, { style: 'currency', currency: product.currency || 'PKR' }).format(product.price)}</p>
          <button
            onClick={() => addItem(product, 1)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-accent text-white hover:opacity-90"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}


