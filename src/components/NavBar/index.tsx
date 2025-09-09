import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      {/* Add more links as needed */}
    </nav>
  );
}