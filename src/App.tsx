import Header from "./components/Header/Header.tsx";
import Body from "./components/Body/Body.tsx";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Body />
            <main>
                <ProductCarousel />
            </main>
            <Footer />
        </div>
    );
}

export default App;
