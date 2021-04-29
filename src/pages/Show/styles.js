import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;   
`;

export const Form = styled.form`
   display: flex;
   flex-direction: row; 
   margin: 50px;
`;

export const Input = styled.input`
   height: 5vh;
   width: 100%;
   padding: 10px;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1rem;
`;

export const Button = styled.button`
   height: 5vh;
   width: 10%;
   padding: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1rem;
`;

export const List = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   margin-top: 50px;
   padding: 10px;
   width: 100%; 
`;

export const ItemList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;      
`;
