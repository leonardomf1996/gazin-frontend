import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   height: 10vh;
   width: 100%;

   background: #292961;
`;

export const Strong = styled.strong`
   color: #DBDBDB;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-size: 1.5rem;   

   &:hover {
      color: #DBDB;
      font-size: 1.6rem;
   }
`;