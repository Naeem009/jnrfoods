// Product detail page with JSON-LD and add-to-cart
import Image from "next/image";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { Metadata } from "next";
import { useCartStore } from "../../../stores/cart";
import { Suspense } from "react";
import type { Product } from "../../../types/product";

export async function generateStaticParams() {
  const file = path.join(process.cwd(), "public", "products.json");
  const raw = fs.readFileSync(file, "utf-8");
  const products: Product[] = JSON.parse(raw);
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  if (!product) return {};
  const url = `https://jnrfoods.com/products/${product.slug}`;
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: product.title,
      description: product.description,
      url,
      images: product.images?.map((u) => ({ url: u, width: 800, height: 600, alt: product.title })) || [],
      type: "website",
    },
    twitter: { card: "summary_large_image", title: product.title, description: product.description, images: product.images?.[0] ? [product.images[0]] : [] },
  };
}

async function getProduct(slug: string): Promise<Product | null> {
  const file = path.join(process.cwd(), "public", "products.json");
  const raw = fs.readFileSync(file, "utf-8");
  const products: Product[] = JSON.parse(raw);
  return products.find((p) => p.slug === slug) || null;
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) return notFound();
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: product.images,
    description: product.description,
    sku: product.id,
    offers: { "@type": "Offer", priceCurrency: product.currency || "PKR", price: String(product.price), availability: "http://schema.org/InStock" },
  };
  return (
    <section className="container py-8 grid gap-8 lg:grid-cols-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white">
        <Image src={product.images?.[0] || "/products/1.jpg"} alt={product.title} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="mt-2 text-muted">{product.description}</p>
        <p className="mt-4 text-xl font-bold">{new Intl.NumberFormat(undefined, { style: 'currency', currency: product.currency || 'PKR' }).format(product.price)}</p>
        <Suspense>
          {/* Client island for add to cart */}
          <AddToCart product={product} />
        </Suspense>
      </div>
    </section>
  );
}

function AddToCart({ product }: { product: Product }) {
  // This component is intentionally not "use client" but relies on store in a boundary; keep simple by direct button linking to cart
  const add = (product: Product) => {
    // dynamic import to avoid SSR mismatch
    import("../../../stores/cart").then((m) => m.useCartStore.getState().addItem(product, 1));
  };
  return (
    <button onClick={() => add(product)} className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white hover:opacity-90">
      Add to cart
    </button>
  );
}


