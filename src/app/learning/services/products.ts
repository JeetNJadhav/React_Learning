export const fetchProducts = async (query: any, signal: AbortSignal) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
      {
        signal: signal,
      },
    );
    console.log("res: ", res);
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
