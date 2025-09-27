// Services page: overview of offerings with CTA
import Link from "next/link";
import { Package, Truck, Headphones } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "Wholesale supply, fast delivery, and dedicated support for your pantry needs.",
};

const services = [
  {
    icon: Package,
    title: "Wholesale & B2B",
    desc: "Bulk sourcing for restaurants, caterers, and retailers with consistent quality.",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    desc: "Reliable delivery windows with careful handling and freshness ensured.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated support to help you pick the right products and resolve issues quickly.",
  },
];

export default function ServicesPage() {
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold">Our Services</h1>
      <p className="mt-2 text-muted max-w-prose">
        We combine quality sourcing with dependable logistics to keep your pantry stocked. Whether you are a home cook or a business, we have you covered.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border bg-white p-6 shadow-card">
            <s.icon aria-hidden className="text-accent" />
            <h2 className="mt-3 font-medium">{s.title}</h2>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border bg-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-semibold">Need a custom quote?</p>
          <p className="text-sm text-muted">Tell us your requirements and we’ll get back within 1 business day.</p>
        </div>
        <Link href="/contact" className="px-4 py-2 rounded-md bg-accent text-white hover:opacity-90">Contact us</Link>
      </div>
    </section>
  );
}


