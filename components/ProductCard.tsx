"use client";

import Image from "next/image";

type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  images: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const handleClick = () => {
    alert(`Added ${product.title} to cart`);
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      {/* Fixed Image Container */}
      <div className="relative w-full h-80 flex items-center justify-center bg-gray-50 rounded-lg">
        <Image
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.title}
          width={300}
          height={400}
          //fill
          className="object-cover p-1"
        />
      </div>

      <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">
        {new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: product.currency || "PKR",
        }).format(product.price)}
      </p>
      <button
        onClick={handleClick}
        className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80"
      >
        Add to Cart
      </button>
    </div>
  );
}
