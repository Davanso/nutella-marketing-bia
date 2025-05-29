import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empresas from "./pages/Empresas";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresas" element={<Empresas />} />
        </Routes>
    );
};

export default App;
