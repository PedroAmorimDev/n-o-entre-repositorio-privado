import { styled } from "styled-components";

export const Cabeca = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
font-family: "Poppins", sans-serif;
margin: 0px 20px 0px 20px;
flex-wrap: wrap;
`
export const Logo = styled.h1`
color: black;
font-weight: 600;
`
export const Span = styled.span`
color: #0033B6;
`

export const Lista = styled.div`
display: flex;
gap: 30px;
flex-wrap: wrap;
`
export const Buttons = styled.button`
color: white;
background-color: black;
border: none;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 26px;
height: 40px;
width: 70px;
font-weight: 500;
font-family: "Poppins", sans-serif;
&:hover{
     cursor: pointer;
}
`
export const Paragraph = styled.a`
color: black;
font-family: "Poppins", sans-serif;
font-weight: 500;
text-decoration: none;
&:hover{
     cursor: pointer;
}
`


