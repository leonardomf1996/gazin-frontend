import { Container, Strong } from './styles';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <Container>
         <Link to={'/'}>
            <Strong>Show</Strong>
         </Link>

         <Link to={'/Create'}>
            <Strong>Create</Strong>
         </Link>

         <Link to={'/Update'}>
            <Strong> Update</Strong>
         </Link>

         <Link to={'/Delete'}>
            <Strong> Delete</Strong>
         </Link>
      </Container>
   );
}

export { Header };
