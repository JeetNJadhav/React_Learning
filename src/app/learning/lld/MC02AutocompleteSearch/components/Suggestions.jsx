export const Suggestions = ({
  debouncedValue,
  state,
  products,
  keyIdx,
  setChips,
}) => {
  if (!debouncedValue) return null;
  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;
  if (!products.length) return <p>No results...</p>;

  const selectProduct = (title) => {
    setChips((prev) => (prev.includes(title) ? prev : [...prev, title]));
  };

  return products.map((product, index) => (
    <div
      key={product.id}
      className={`suggestion ${keyIdx === index ? "active" : ""}`}
      onClick={() => selectProduct(product.title)}
    >
      {product.title}
    </div>
  ));
};
