import { useEffect, useRef, useState } from "react";

const AutoCompleteSearch = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const [chips, setChips] = useState([]);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [keyIdx, setKeyIdx] = useState(-1);

  // for checking number of api calls
  const count = useRef(0);

  const fetchProducts = async () => {
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

  const searchProducts = async () => {
    if (!debouncedValue.trim()) {
      setProducts([]);
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const resp = await fetch(
        `https://dummyjson.com/products/search?q=${debouncedValue}`,
      );

      const data = await resp.json();
      console.log("Api calls: ", ++count.current);

      setProducts(data.products);
    } catch (error) {
      setState((prev) => ({ ...prev, error: `Api Failed: ${error}` }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    searchProducts();
  }, [debouncedValue]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  //debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const Suggestions = () => {
    if (!debouncedValue) return null;
    if (state.loading) return <p>Loading ...</p>;
    if (state.error) return <p>{state.error}</p>;
    if (products.length === 0) return <p>No results..</p>;
    return products.map((product, index) => (
      <div
        key={product.id}
        onClick={() =>
          setChips((prev) => {
            if (prev.includes(product.title)) return prev;
            return [...prev, product.title];
          })
        }
        className={`suggestion ${keyIdx === index ? "active" : ""}`}
      >
        {product.title}
      </div>
    ));
  };

  const Chip = () => {
    return chips.map((chip) => (
      <div className="chip" key={chip}>
        {chip}
        <button
          className="chipBtn"
          onClick={() =>
            setChips((prev) => {
              return prev.filter((item) => item !== chip);
            })
          }
        >
          x
        </button>
      </div>
    ));
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setKeyIdx((prev) => Math.min(prev + 1, products.length - 1));
        break;

      case "ArrowUp":
        e.preventDefault();
        setKeyIdx((prev) => Math.max(prev - 1, 0));
        break;

      case "Enter":
        e.preventDefault();

        if (keyIdx !== -1) {
          const selectedProduct = products[keyIdx];

          // Same logic as clicking a suggestion
          console.log(selectedProduct);

          setChips((prev) => {
            if (prev.includes(selectedProduct.title)) return prev;
            return [...prev, selectedProduct.title];
          });

          // setProducts([]);
        }

        break;

      case "Escape":
        setKeyIdx(-1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      {/* Introduction */}
      <h1>Maching Coding 2: AutoComplete Search</h1>
      <p>
        To understand requirements please visit Link:{" "}
        <a
          href="https://beyond-the-brackets.notion.site/Last-24-Hours-Before-a-Frontend-Interview-38f04a732760808a80c1fa784e27c3ea"
          target="_blank"
          rel="noopener noreferrer"
        >
          Machine Coding
        </a>
      </p>

      <div className="searchContainer">
        <div className="chipContainer">
          <Chip />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="suggestionContainer">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
