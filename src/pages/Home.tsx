import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

function Home() {
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

export default Home;
