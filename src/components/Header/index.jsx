import { Container } from './styles';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <Container>
         <Link to={'/'}>
            <a>Show</a>
         </Link>

         <Link to={'/Create'}>
            <a>Create</a>
         </Link>

         <Link to={'/Update'}>
            <a>Update</a>
         </Link>

         <Link to={'/Delete'}>
            <a>Delete</a>
         </Link>
      </Container>
   );
}

export { Header };
