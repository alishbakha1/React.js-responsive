import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="not-found-page page-enter page-enter-active">
      <Container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been moved or doesn&apos;t exist.</p>
        <Link to="/" className="btn-luxury btn-luxury-filled">
          Return Home
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
