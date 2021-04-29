import { Container } from './styles';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <Container>
         <Link to={'/'}>
            Show
         </Link>

         <Link to={'/Create'}>
            Create
         </Link>

         <Link to={'/Update'}>
            Update
         </Link>

         <Link to={'/Delete'}>
            Delete
         </Link>
      </Container>
   );
}

export { Header };
