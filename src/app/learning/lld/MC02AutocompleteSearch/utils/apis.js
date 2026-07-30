export const fetchProducts = async () => {
  setState((prev) => ({ ...prev, loading: true, error: null }));
  try {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    setProducts(data.products);
  } catch (error) {
    setState((prev) => ({ ...prev, error: `Api Failed: ${error}` }));
  } finally {
    setState((prev) => ({ ...prev, loading: false }));
  }
};

export const searchProducts = async ({
  query,
  setProducts,
  setState,
  count,
}) => {
  if (!query.trim()) {
    setProducts([]);
    return;
  }

  setState((prev) => ({
    ...prev,
    loading: true,
    error: null,
  }));

  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
    );

    const data = await response.json();

    console.log("API Calls:", ++count.current);

    setProducts(data.products);
  } catch (error) {
    setState((prev) => ({
      ...prev,
      error: `API Failed: ${error}`,
    }));
  } finally {
    setState((prev) => ({
      ...prev,
      loading: false,
    }));
  }
};
