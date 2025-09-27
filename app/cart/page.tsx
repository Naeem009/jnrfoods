// Cart page displaying items and totals
"use client";
import Link from "next/link";
import { useCartStore } from "../../stores/cart";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, clear } = useCartStore();
  const hasItems = items.length > 0;
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {!hasItems ? (
        <div className="mt-6 rounded-xl border p-8 bg-white text-center">
          <p className="text-muted">Your cart is empty.</p>
          <Link href="/products" className="inline-block mt-4 px-4 py-2 rounded-md bg-accent text-white">Browse products</Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-4">
            {items.map((i) => (
              <div key={i.product.id} className="rounded-xl border bg-white p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{i.product.title}</p>
                  <p className="text-sm text-muted">{new Intl.NumberFormat(undefined, { style: 'currency', currency: i.product.currency || 'PKR' }).format(i.product.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    aria-label={`Quantity for ${i.product.title}`}
                    type="number"
                    min={1}
                    value={i.quantity}
                    onChange={(e) => updateQuantity(i.product.id, Math.max(1, Number(e.target.value)))}
                    className="w-16 rounded-md border px-2 py-1"
                  />
                  <button onClick={() => removeItem(i.product.id)} className="text-highlight hover:underline">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-xl border bg-white p-6 h-fit">
            <p className="font-semibold">Order Summary</p>
            <div className="flex items-center justify-between mt-4">
              <span>Subtotal</span>
              <span className="font-medium">{new Intl.NumberFormat(undefined, { style: 'currency', currency: items[0]?.product.currency || 'PKR' }).format(total())}</span>
            </div>
            <div className="mt-4 grid gap-2">
              <input placeholder="Promo code" className="rounded-md border px-3 py-2" aria-label="Promo code" />
              <button className="px-4 py-2 rounded-md bg-accent text-white">Checkout</button>
              <button onClick={clear} className="px-4 py-2 rounded-md border">Clear cart</button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}


