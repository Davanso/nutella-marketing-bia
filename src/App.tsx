import Header from "./components/Header/Header.tsx";
import Body from "./components/Body/Body.tsx";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel.tsx";
import Footer from "./components/Footer/Footer.tsx";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel.tsx";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Body />
            <main>
                <HeroCarousel />
                <ProductCarousel />
            </main>
            <Footer />
        </div>
    );
}

export default App;
