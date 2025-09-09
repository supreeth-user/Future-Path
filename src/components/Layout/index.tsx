import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      {/* Header, navigation, etc. can be added here */}
      <Outlet />
      {/* Footer can be added here */}
    </div>
  );
}