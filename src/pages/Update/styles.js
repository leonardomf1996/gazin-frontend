import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;  
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column; 
   margin: 50px;
   justify-content: center;
   align-items: center;   
`;

export const Input = styled.input`
   height: 5vh;
   width: 50%;
   padding: 10px;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1rem;
   margin-top: 10px;
   border-radius: 10px;
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
   margin-top: 20px;
   border-radius: 10px;
`;