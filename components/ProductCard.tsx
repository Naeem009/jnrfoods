"use client";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const handleClick = () => {
    alert(`Added ${product.name} to cart`);
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleClick}
        className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80"
      >
        Add to Cart
      </button>
    </div>
  );
}
