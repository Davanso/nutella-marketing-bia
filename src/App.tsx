import Header from "./components/Header/Header.tsx";
import Body from "./components/Body/Body.tsx";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel.tsx";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Body />
            <main>
                <ProductCarousel />
            </main>
        </div>
    );
}

export default App;
