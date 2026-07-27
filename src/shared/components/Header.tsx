import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <div style={styles.links}>
        <NavLink
          to="/homepage"
          style={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          HomePage
        </NavLink>

        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>

        <NavLink
          to="/concepts"
          style={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          React Concepts
        </NavLink>

        <NavLink
          to="/only-js"
          style={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Javascript Concepts
        </NavLink>

        <NavLink
          to="/lld"
          style={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          LLD
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
  },
  active: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};
