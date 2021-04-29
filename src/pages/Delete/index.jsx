import { useState } from 'react';
import { Header } from '../../components/Header';
import { Container, Form, Input, Button } from './styles';

import { api } from '../../services/api';

function Delete() {
   const initialFields = {
      id: ''      
   };

   const [values, setValues] = useState(initialFields);

   const handleInputChange = (event) => {
      let { name, value } = event.target;

      setValues({
         ...values,
         [name]: value
      })
   }

   const handleFormSubmit = (event) => {
      event.preventDefault();

      if (values.id === '') {
         return;
      }      
      const response = api.delete(`developers/${values.id}`);
      setValues(initialFields);
   }

   return (
      <Container>
         <Header />


         <Form onSubmit={handleFormSubmit}>
            <Input
               placeholder="Insira o ID do usuário a ser deletado"
               name="id"
               value={values.id}
               onChange={handleInputChange}
            />

            <Button>
               Alterar usuário
            </Button>
         </Form>
      </Container>
   );
}

export { Delete };