import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

interface Country {
  name: string;
  code: string;
}

interface State {
  name: string;
  code: string;
}

interface City {
  name: string;
  pincode: string;
}

interface SelectedLocation {
  country: Country | null;
  state: State | null;
  city: City | null;
}

export default function LocationDropdowns() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [selected, setSelected] = useState<SelectedLocation>({
    country: null,
    state: null,
    city: null,
  });

  const [loading, setLoading] = useState({
    countries: false,
    states: false,
    cities: false,
  });

  const [error, setError] = useState<string | null>(null);

  // Load countries on mount
  useEffect(() => {
    setLoading((prev) => ({ ...prev, countries: true }));
    setError(null);
    axios
      .get<Country[]>(`${BASE_URL}/countries`)
      .then((res) => setCountries(res.data))
      .catch(() => setError("Failed to load countries."))
      .finally(() => setLoading((prev) => ({ ...prev, countries: false })));
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (!selected.country) return;
    setStates([]);
    setCities([]);
    setSelected((prev) => ({ ...prev, state: null, city: null }));
    setLoading((prev) => ({ ...prev, states: true }));
    setError(null);
    axios
      .get<State[]>(`${BASE_URL}/states?country=${selected.country.code}`)
      .then((res) => setStates(res.data))
      .catch(() => setError("Failed to load states."))
      .finally(() => setLoading((prev) => ({ ...prev, states: false })));
  }, [selected.country]);

  // Load cities when state changes
  useEffect(() => {
    if (!selected.state || !selected.country) return;
    setCities([]);
    setSelected((prev) => ({ ...prev, city: null }));
    setLoading((prev) => ({ ...prev, cities: true }));
    setError(null);
    axios
      .get<City[]>(
        `${BASE_URL}/cities?country=${selected.country.code}&state=${selected.state.code}`
      )
      .then((res) => setCities(res.data))
      .catch(() => setError("Failed to load cities."))
      .finally(() => setLoading((prev) => ({ ...prev, cities: false })));
  }, [selected.state]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = countries.find((c) => c.code === e.target.value) || null;
    setSelected({ country: found, state: null, city: null });
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = states.find((s) => s.code === e.target.value) || null;
    setSelected((prev) => ({ ...prev, state: found, city: null }));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = cities.find((c) => c.name === e.target.value) || null;
    setSelected((prev) => ({ ...prev, city: found }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Country Dropdown */}
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={selected.country?.code || ""}
          onChange={handleCountryChange}
          disabled={loading.countries}
          style={{ display: "block", width: "100%", marginTop: "4px" }}
        >
          <option value="">
            {loading.countries ? "Loading..." : "Select Country"}
          </option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div>
        <label htmlFor="state">State</label>
        <select
          id="state"
          value={selected.state?.code || ""}
          onChange={handleStateChange}
          disabled={!selected.country || loading.states}
          style={{ display: "block", width: "100%", marginTop: "4px" }}
        >
          <option value="">
            {loading.states ? "Loading..." : "Select State"}
          </option>
          {states.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city">City</label>
        <select
          id="city"
          value={selected.city?.name || ""}
          onChange={handleCityChange}
          disabled={!selected.state || loading.cities}
          style={{ display: "block", width: "100%", marginTop: "4px" }}
        >
          <option value="">
            {loading.cities ? "Loading..." : "Select City"}
          </option>
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name} — {c.pincode}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Summary */}
      {selected.city && (
        <div style={{ marginTop: "8px", padding: "12px", background: "#f0f0f0", borderRadius: "6px" }}>
          <p><strong>Country:</strong> {selected.country?.name}</p>
          <p><strong>State:</strong> {selected.state?.name}</p>
          <p><strong>City:</strong> {selected.city.name}</p>
          <p><strong>Pincode:</strong> {selected.city.pincode}</p>
        </div>
      )}
    </div>
  );
}
