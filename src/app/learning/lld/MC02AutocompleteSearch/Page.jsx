import { useEffect, useRef, useState } from "react";
import { searchProducts } from "./utils/apis";
import { Chip } from "./components/Chip";
import { Introduction } from "./components/Introduction";
import { Suggestions } from "./components/Suggestions";

const AutoCompleteSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [products, setProducts] = useState([]);
  const [chips, setChips] = useState([]);
  const [keyIdx, setKeyIdx] = useState(-1);

  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const count = useRef(0);

  useEffect(() => {
    searchProducts({
      query: debouncedValue,
      setProducts,
      setState,
      count,
    });
  }, [debouncedValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const selectProduct = (title) => {
    setChips((prev) => (prev.includes(title) ? prev : [...prev, title]));
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
          selectProduct(products[keyIdx].title);
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
      <Introduction />

      <div className="searchContainer">
        <div className="chipContainer">
          <Chip chips={chips} setChips={setChips} />
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="suggestionContainer">
          <Suggestions
            debouncedValue={debouncedValue}
            state={state}
            products={products}
            keyIdx={keyIdx}
            setChips={setChips}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
