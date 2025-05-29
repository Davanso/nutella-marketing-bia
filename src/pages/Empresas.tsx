import React from "react";
import "../components/Empresas/Empresas.css";

const Empresas: React.FC = () => {
    return (
        <div className="empresas-container">
            <h1>Nutella® para Profissionais</h1>
            <p>
                Conheça a linha desenvolvida especialmente para confeiteiros e empresas que trabalham com grandes volumes de produção.
            </p>
            <a href="/" className="back-link">Voltar para Home</a>
        </div>
    );
};

export default Empresas;
