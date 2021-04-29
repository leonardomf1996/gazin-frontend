import { useState } from 'react';
import { Header } from '../../components/Header';
import { Container, Form, Input, Button } from './styles';

import { api } from '../../services/api';

function Create() {
   const initialFields = {
      nome: '',
      sexo: '',
      idade: '',
      hobby: '',
      data: '',
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

      if (values.nome === '' || values.sexo === null || values.idade === '' || values.hobby === '' || values.data === '') {
         return;
      }
      const json = {
         nome: values.nome,
         sexo: values.sexo,
         idade: values.idade,
         hobby: values.hobby,
         datanascimento: values.data
      };
      const response = api.post('developers', json);
      setValues(initialFields);
   }

   return (
      <Container>
         <Header />

         <Form onSubmit={handleFormSubmit}>
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
               Cadastrar usuário
            </Button>
         </Form>
      </Container>
   );
}

export { Create };