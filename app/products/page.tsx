// Products listing page with search and basic filters (Client Component)
"use client";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../lib/useProducts";

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-semibold">Products</h1>
      <ClientGrid />
    </section>
  );
}

function ClientGrid() {
  const { products, isLoading } = useProducts();
  return (
    <div className="mt-6">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 rounded-xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}


