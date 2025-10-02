import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import type { Product } from "../types/product";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  const file = path.join(process.cwd(), "public", "products.json");
  const products: Product[] = JSON.parse(fs.readFileSync(file, "utf-8"));
  const featured = products.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      <section className="bg-[#8B2214] relative pt-1">
          <div className="relative rounded-l overflow-hidden shadow-card flex grid lg:grid-cols-1 gap-1 py-2 items-center w-full">
            <HeroSlider />
          </div>
      </section>
      {/* Featured Products Section - Full Width */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Featured Products
            </h2>
            <p className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of top-quality cake toppings and ingredients
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-white rounded-2xl shadow-modern overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-glow"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.images[0] || "/1.jpg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full font-montserrat font-semibold text-sm">
                    {product.currency} {product.price}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-montserrat font-medium mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-montserrat font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="font-montserrat text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Stock indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-montserrat text-sm text-gray-500">
                      Stock: {product.stock} units
                    </span>
                    <div className="flex items-center space-x-1">
                      {(product.tags || []).slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-montserrat"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href={`/products/${product.slug}`}
                    className="block w-full bg-blue-900 text-white font-montserrat font-semibold py-3 px-4 rounded-xl text-center hover:shadow-glow hover:scale-105 transition-all duration-300 group-hover:from-orange-dark group-hover:to-accent">
                    View Product
                  </Link>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 from-accent/10 to-orange-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center space-x-2 bg-gray-700 text-white font-montserrat font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Production Process
            </h2>
            <p className="font-montserrat text-m text-gray-600 max-w-2xl mx-auto">
              We take pride in our production process and ensure that every product is made with the highest quality ingredients. Quality is ensured
              to make ervytime feel the same as fisrt. <br/>
              All products Hilal Certified and authentic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
