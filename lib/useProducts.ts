// SWR hook to load products from public/products.json
"use client";
import useSWR from "swr";
import type { Product } from "../types/product";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useProducts() {
  const { data, error, isLoading, mutate } = useSWR<Product[]>("/products.json", fetcher, {
    revalidateOnFocus: false,
  });
  return { products: data || [], error, isLoading, mutate };
}


