import { styled } from "styled-components";

 

 export const StyledHeader = styled.header`
 background-color: black;
 padding:10px 0;
 
 h1{
    color: white
 }

 &:hover{
    background-color: ${(props)=> props.theme.colors.header};
 }
 `