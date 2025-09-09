export function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #eee', marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
      &copy; {new Date().getFullYear()} Future Path. All rights reserved.
    </footer>
  );
}