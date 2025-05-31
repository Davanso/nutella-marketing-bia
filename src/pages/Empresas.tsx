import "../components/Empresas/Empresas.css";
import Header from "../components/Header/Header.tsx";
import Body from "../components/Body/Body.tsx";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.tsx";


function Empresas() {

    const slidesEmpresas = [
        {
            id: 1,
            image: "/images/nutella_profissional1.jpg",
            title: "Utensilíos de cozinha Nutella®",
            subtitle: "",
            link: "",
        },
        {
            id: 2,
            image: "/images/nutella_profissional2.jpg",
            title: "Pensado para quem vive da confeitaria",
            link: "",
        },
        {
            id: 3,
            image: "/images/nutella_profissional3.jpg",
            title: "Mixer profissional Nutella®",
            link: "",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="empresas-container">
            <Header />
                <Body />
                    {/* Hero Section */}
                    <section className="hero-banner">
                        <div className="hero-banner-content">
                            <h1>Linha Profissional Nutella®</h1>
                            <div className="hero-banner-content-subtext">
                                <h3>Para Confeiteiros e Profissionais de Panificação</h3>
                            </div>
                        </div>

                        <div className="hero-expandable-message">
                            <p>
                                Criada para quem vive da confeitaria, a linha profissional Nutella®
                                entrega mais rendimento, qualidade e confiança na hora da produção.
                            </p>

                            {showMore && (
                                <p>
                                    E agora, com novas iniciativas, oferecemos mais que o produto:
                                    conteúdos exclusivos, relacionamento direto com confeiteiros e um
                                    programa de recompensas único, que valoriza quem escolhe Nutella® no dia a dia.
                                </p>
                            )}

                            <button className="hero-toggle-button" onClick={() => setShowMore(!showMore)}>
                                {showMore ? (
                                    <>
                                        <FaChevronUp />
                                    </>
                                ) : (
                                    <>
                                        <FaChevronDown />
                                    </>
                                )}
                            </button>
                        </div>
                    </section>

                    <section className="hero-carousel">
                        <HeroCarousel
                            customClass="hero-carousel-empresas"
                            slides={slidesEmpresas}
                            onSlideChange={(index) => setCurrentSlide(index)}
                            hideInternalTitle={true}
                        />

                        <div className="hero-slide-title-container">
                            {slidesEmpresas[currentSlide]?.title}
                        </div>

                    </section>


                    {/* Benefícios */}
                    <section className="benefits-grid">
                        <h2>Por que escolher a linha profissional?</h2>
                        <div className="benefits-cards">
                            <div className="benefit-card">
                                <img src="/icons/qualidade.svg" alt="Alta Qualidade" />
                                <h3>Alta Qualidade</h3>
                                <p>Produzida com ingredientes selecionados, ideal para quem busca excelência.</p>
                            </div>
                            <div className="benefit-card">
                                <img src="/icons/rendimento.svg" alt="Mais Rendimento" />
                                <h3>Mais Rendimento</h3>
                                <p>Fácil de aplicar e rende mais nas produções artesanais e em escala.</p>
                            </div>
                            <div className="benefit-card">
                                <img src="/icons/embalagem.svg" alt="Embalagem 3kg" />
                                <h3>Embalagem 3kg</h3>
                                <p>Ideal para a produção diária, com design prático para confeiteiros.</p>
                            </div>
                            <div className="benefit-card">
                                <img src="/icons/marca.svg" alt="Reconhecimento da Marca" />
                                <h3>Marca Reconhecida</h3>
                                <p>Nutella® valoriza o seu negócio e aumenta a confiança do consumidor.</p>
                            </div>
                        </div>
                    </section>

                    {/* Galeria de Imagens */}
                    <section className="galeria-hover">
                        <div className="galeria-grid">
                            <div className="galeria-item">
                                <img src="/images/galeria1.png" alt="Usando Nutella" />
                                <div className="overlay">Usando Nutella</div>
                            </div>
                            <div className="galeria-item">
                                <img src="/images/galeria2.png" alt="Mais rendimento" />
                                <div className="overlay">Mais rendimento</div>
                            </div>
                            <div className="galeria-item">
                                <img src="/images/galeria3.png" alt="Produção artesanal" />
                                <div className="overlay">Produção artesanal</div>
                            </div>
                        </div>
                    </section>


                    {/* Estratégia de relacionamento */}
                    <section className="relacionamento-section">
                        <h2>Construindo relacionamento com os profissionais</h2>
                        <div className="relacionamento-cards">
                            <div className="relacionamento-card">
                                <img src="/icons/produto.svg" alt="Novos Produtos" />
                                <h3>Novos Produtos</h3>
                                <p>Desenvolvimento de itens voltados à produção artesanal com foco no uso profissional.</p>
                            </div>
                            <div className="relacionamento-card">
                                <img src="/icons/sustentavel.svg" alt="Sustentabilidade" />
                                <h3>Sustentabilidade</h3>
                                <p>Iniciativas sustentáveis que valorizam a produção consciente e o meio ambiente.</p>
                            </div>
                            <div className="relacionamento-card">
                                <img src="/icons/comunicacao.svg" alt="Comunicação Direta" />
                                <h3>Comunicação Direta</h3>
                                <p>Canais de conversa exclusivos com confeiteiros e donos de pequenos negócios.</p>
                            </div>
                            <div className="relacionamento-card">
                                <img src="/icons/digital.svg" alt="Presença Digital" />
                                <h3>Presença Digital</h3>
                                <p>Plataforma integrada para conteúdos, novidades e trocas com a comunidade.</p>
                            </div>
                        </div>
                    </section>


                    {/*/!* Programa de Recompensas *!/*/}
                    <section className="recompensas-section">
                        <h2>Programa de Recompensas</h2>
                        <div className="recompensas-items">
                            <div className="recompensa-item">
                                <img src="/icons/desconto.svg" alt="Descontos" />
                                <h3>Descontos Exclusivos</h3>
                                <p>Ganhe descontos reais em novas compras ao acumular pontos.</p>
                            </div>
                            <div className="recompensa-item">
                                <img src="/icons/brindes.svg" alt="Brindes" />
                                <h3>Brindes Nutella®</h3>
                                <p>Receba materiais e brindes personalizados com a marca.</p>
                            </div>
                            <div className="recompensa-item">
                                <img src="/icons/eventos.svg" alt="Eventos" />
                                <h3>Eventos & Workshops</h3>
                                <p>Participe de encontros, capacitações e feiras do setor.</p>
                            </div>
                            <div className="recompensa-item">
                                <img src="/icons/personalizado.svg" alt="Promoções" />
                                <h3>Promoções Personalizadas</h3>
                                <p>Ofertas únicas, feitas especialmente para confeiteiros Nutella®.</p>
                            </div>
                        </div>
                    </section>

        </div>
    );
}

export default Empresas;
