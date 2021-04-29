import { useState } from 'react';

import { Container, Form, Input, Button, List, ItemList } from './styles';
import { Header } from '../../components/Header';

import { api } from '../../services/api';

function Show() {
   const [developers, setDevelopers] = useState(null);
   const [inputDevelopers, setInputDevelopers] = useState('');
   const [errors, setErrors] = useState(null);

   const handleChange = (event) => {
      setInputDevelopers(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!inputDevelopers) {
         try {
            const response = await api.get(`developers/`);
            setDevelopers(response.data);
            setErrors(null);
            return;
         } catch (error) {
            setErrors('Desenvolvedores não encontrados!');
            setDevelopers(null);
         }
      }

      try {
         const response = await api.get(`developers/${inputDevelopers}`);
         setDevelopers(response.data);
         setErrors(null);
         return;
      } catch (error) {
         setErrors('Desenvolvedor não encontrado!');
         setDevelopers(null);
      }

   }

   return (
      <Container>
         <Header />

         <Form onSubmit={handleSubmit}>
            <Input
               value={inputDevelopers}
               placeholder='Caso deseje pesquisar alguém específico, insira o ID'
               onChange={handleChange}
            />
            <Button>
               Pesquisar
            </Button>
         </Form>

         <List>
            {developers ? developers.map(developer => (
               <ItemList key={developer.id}>
                  <h1>{developer.nome}</h1>
                  <p>{developer.id}</p>
                  <p>{developer.sexo}</p>
                  <p>{developer.idade}</p>
                  <p>{developer.hobby}</p>
                  <p>{developer.datanascimento}</p>
               </ItemList>
            )) : (<h1>{errors}</h1>)}
         </List>
      </Container>
   );
}

export { Show };