import styled from "styled-components";

export const Styledcard= styled.div`
display: flex;
align-itmes: center;
background-color:#fff;
border-radius:15px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
margin: 40px 0;
padding: 60px;
flex-direction: ${({layout})=> layout || 'row'};

@media (max-width:${({theme})=> theme.mobile}){
    flex-direction: column;
}
`