import React, { useState, useEffect } from 'react';
import { Titulo, Paragrafo, Caixa, Grupo, GrupoProvas, Buttons, ProvasContainer } from '../styles/Exames';

const urlBase = 'https://apisunsale.azurewebsites.net/api/PublicQuestoes/GetTests';

const PuxarProvas = async () => {
    const response = await fetch(urlBase);
    const data = await response.json();
    return data;
};

const MostrarProvas = ({ provas }) => {
    return (
        <ProvasContainer>
            {provas.map((prova) => (
                <GrupoProvas key={prova.id}>
                    <h3>{prova.nomeProva}</h3>
                    <h4>Tipo de Prova: {prova.tipoProva}</h4>
                    <a target='_blank' href={prova.linkProva}>
                        <Buttons>Prova</Buttons>
                    </a>
                    <a target='_blank' href={prova.linkGabarito}>
                        <Buttons>Gabarito</Buttons>
                    </a>
                </GrupoProvas>
            ))}
        </ProvasContainer>
    );
};

const TextoIntroducao = ({ titulo, paragrafo }) => {
    return (
        <Caixa className="texto-introducao">
            <Titulo>{titulo}</Titulo>
            <Paragrafo>{paragrafo}</Paragrafo>
        </Caixa>
    );
};

const PuxarEExibirProvas = () => {
    const [provas, setProvas] = useState([]);

    useEffect(() => {
        const carregarTudo = async () => {
            try {
                const provasData = await PuxarProvas();
                //const provasLimitadas = provasData.object.slice(0, 3);
                console.log(provasData.object);
                setProvas(provasData.object);
            } catch (error) {
                console.error('Erro ao buscar provas:', error);
            }
        };

        carregarTudo();
    }, []);

    return (
        <Grupo>
            <TextoIntroducao
                titulo="Bem-vindo ao nosso repositório de provas!"
                paragrafo="Aqui, você encontrará uma coleção abrangente de provas dos mais variados concursos e exames, incluindo o ENEM,
                concursos da polícia, e muitos outros. Nossa plataforma foi criada para facilitar o acesso a esses materiais
                valiosos, ajudando você a se preparar da melhor forma possível para suas avaliações. Navegue pela lista abaixo
                para encontrar provas e gabaritos que irão te auxiliar no seu percurso de estudos. Desejamos a você uma excelente
                preparação e muito sucesso em seus exames!"
            />
            <MostrarProvas provas={provas} />
        </Grupo>
    );
};

export default PuxarEExibirProvas;
