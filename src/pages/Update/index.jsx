import { useState } from 'react';
import { Header } from '../../components/Header';
import { Container, Form, Input, Button } from './styles';

import { api } from '../../services/api';

function Update() {
   const initialFields = {
      id: '',
      nome: '',
      sexo: '',
      idade: '',
      hobby: '',
      data: '',
   };

   const [values, setValues] = useState(initialFields);
   const [error, setError] = useState(false);

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
         setError(true);
         return;
      }
      const json = {
         nome: values.nome,
         sexo: values.sexo,
         idade: values.idade,
         hobby: values.hobby,
         datanascimento: values.data
      };
      api.put(`developers/${values.id}`, json);
      setValues(initialFields);
      setError(false);
   }

   return (
      <Container>
         <Header />


         <Form onSubmit={handleFormSubmit}>
            <Input
               placeholder="Insira o ID do usuário a ser alterado"
               name="id"
               value={values.id}
               onChange={handleInputChange}
            />
            <Input
               placeholder="Insira o seu nome"
               name="nome"
               value={values.nome}
               onChange={handleInputChange}
            />
            <Input
               placeholder="Insira o sexo (apenas a inicial)"
               name="sexo"
               value={values.sexo}
               onChange={handleInputChange}
               maxLength={1}
            />
            <Input
               placeholder="Insira a sua idade"
               name="idade"
               value={values.idade}
               onChange={handleInputChange}
            />
            <Input
               placeholder="Insira o seu hobby preferido"
               name="hobby"
               value={values.hobby}
               onChange={handleInputChange}
            />
            <Input
               placeholder="Insira a sua data de nascimento"
               name="data"
               value={values.data}
               onChange={handleInputChange}
               type="date"
            />

            <Button>
               Alterar usuário
            </Button>
         </Form>

         {error && (
            <h2>ID do usuário é obrigatório para realizar uma alteração!</h2>
         )}
      </Container>
   );
}

export { Update };