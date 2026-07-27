import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactConcepts from "./pages/ReactConcepts";
import OnlyJS from "./pages/OnlyJS";
import LLDPage from "./lld";


const AppRoutes = () => (
  <Routes>
    {/* <Route path="/homepage" element={<HomePage />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/concepts" element={<ReactConcepts />} />
    <Route path="/only-js" element={<OnlyJS />} />
    <Route path="/lld" element={<LLDPage />} />
  </Routes>
);

export default AppRoutes;
