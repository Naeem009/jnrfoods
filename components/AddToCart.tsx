"use client";

import type { Product } from "../types/product";

export default function AddToCart({ product }: { product: Product }) {
  const add = (product: Product) => {
    import("../stores/cart").then((m) =>
      m.useCartStore.getState().addItem(product, 1)
    );
  };

  return (
    <button
      onClick={() => add(product)}
      className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white hover:opacity-90"
    >
      Add to cart
    </button>
  );
}
