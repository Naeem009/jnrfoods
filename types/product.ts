// Shared Product type for the app
export type Product = {
  id: string; // uuid
  title: string;
  slug: string; // url friendly
  description: string;
  price: number; // integer or float
  currency?: "PKR" | "USD" | string;
  images: string[]; // e.g. "/products/product1.jpg"
  category?: string;
  stock?: number;
  featured?: boolean;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
};


