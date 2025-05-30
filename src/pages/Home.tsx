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
                <HeroCarousel customClass="hero-carousel" slides={
                    [
                        {
                            id: 1,
                            image: "/images/slide1.avif",
                            title: "Comece o dia com Nutella®",
                            subtitle: "Bom dia",
                            link: "/nutella-bom-dia/nutella",
                        },
                            {
                                id: 2,
                                image: "/images/slide2.avif",
                                title: "",
                                link: "",
                            },
                            {
                                id: 3,
                                image: "/images/slide3.avif",
                                title: (
                                    <>
                                        Descubra o nascer do <br /> sol com Nutella®.
                                    </>
                                ),
                                link: "/nutella-bom-dia/nascer-do-sol",
                        }
                    ]
                }
                />
                <ProductCarousel />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
