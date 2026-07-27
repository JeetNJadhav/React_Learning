import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/products";
import { useDebounce } from "./useDebounce";

export const DebounceComponent = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any>([]);
  const debouncedValue = useDebounce(query, 500);

  //   const
  useEffect(() => {
    if (!debouncedValue) return;

    const controller = new AbortController();

    const callApi = async () => {
      const res = await fetchProducts(debouncedValue, controller.signal);
      setProducts(res.products);
    };

    callApi();

    return () => controller.abort();
  }, [debouncedValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {products.map((item: any) => (
          <>
            <li key={item.id}>{item.title}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
