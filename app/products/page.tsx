import ProductGrid from "../../components/ProductGrid";

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-semibold">Products</h1>
      <ProductGrid />
    </section>
  );
}