import styled from "styled-components";     

export const Titulo = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: black;
`;

export const Paragrafo = styled.p`
    font-family: "Poppins", sans-serif;
    color: black;
`;

export const Caixa = styled.div`
    width: 700px;
    max-width: 80%;
    text-align: center;
`;

export const Grupo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProvasContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center; 
`;

export const GrupoProvas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    text-align: center;
    flex: 1 1 calc(33.333% - 32px); 
    box-sizing: border-box;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    margin: 8px;
    background-image: url('https://st3.depositphotos.com/18455676/35659/v/450/depositphotos_356599952-stock-illustration-colorful-holographicfoil-mesh-gredient-abstract.jpg');
`;

export const Buttons = styled.button`
    color: white;
    background-color: black;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 140px;
    height: 55px;
    font-weight: 500;
    margin: 3px;
    font-family: "Poppins", sans-serif;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
    }
`;
