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
            title: "Nutella® reconhecida em qualquer vitrine",
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
            title: "Alta qualidade e rendimento superior",
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

                    {/*/!* Estratégia de relacionamento *!/*/}
                    {/*<section className="relacionamento-section">*/}
                    {/*    <h2>Construindo relacionamento com os profissionais</h2>*/}
                    {/*    <p>*/}
                    {/*        Para ampliar a presença e o relacionamento da marca Nutella entre profissionais,*/}
                    {/*        lançamos uma série de iniciativas estratégicas:*/}
                    {/*    </p>*/}
                    {/*    <ul>*/}
                    {/*        <li>Desenvolvimento de novos produtos voltados à produção artesanal.</li>*/}
                    {/*        <li>Iniciativas sustentáveis com foco na produção consciente.</li>*/}
                    {/*        <li>Canais dedicados de comunicação com confeiteiros.</li>*/}
                    {/*        <li>Experiência digital integrada ao site da Nutella.</li>*/}
                    {/*    </ul>*/}
                    {/*</section>*/}

                    {/*/!* Canal exclusivo para confeiteiros *!/*/}
                    {/*<section className="canal-section">*/}
                    {/*    <h2>Canal exclusivo para confeiteiros</h2>*/}
                    {/*    <p>*/}
                    {/*        Criamos um espaço dedicado dentro da plataforma oficial da Nutella:*/}
                    {/*    </p>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <strong>Blog do Confeiteiro:</strong> com dicas práticas, receitas e técnicas de venda.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <strong>Espaço colaborativo:</strong> para confeiteiros trocarem experiências e sugestões.*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <strong>Acesso exclusivo:</strong> via login com CNPJ para desbloquear conteúdos e ações.*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</section>*/}

                    {/*/!* Programa de Recompensas *!/*/}
                    {/*<section className="recompensas-section">*/}
                    {/*    <h2>Programa de Recompensas</h2>*/}
                    {/*    <p>*/}
                    {/*        Com QR Codes nas embalagens, confeiteiros acumulam pontos ao cadastrar códigos únicos*/}
                    {/*        na plataforma. Os pontos geram vantagens reais:*/}
                    {/*    </p>*/}
                    {/*    <ul>*/}
                    {/*        <li>Descontos em novas compras</li>*/}
                    {/*        <li>Brindes e materiais exclusivos</li>*/}
                    {/*        <li>Acesso a eventos e workshops</li>*/}
                    {/*        <li>Promoções personalizadas conforme o perfil profissional</li>*/}
                    {/*    </ul>*/}
                    {/*</section>*/}
        </div>
    );
}

export default Empresas;
