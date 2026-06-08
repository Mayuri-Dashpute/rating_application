import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ROLE_HOME = { ADMIN: '/admin/dashboard', USER: '/user/dashboard', STORE_OWNER: '/owner/dashboard' };

// Requires authentication — redirects to /login if not
export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

// Requires a specific role — redirects to role home if mismatch
export function RoleRoute({ children, roles }) {
  const { isAuthenticated, currentUser } = useAuth();
  const location = useLocation();

  // Not authenticated - redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Check if user has required role
  if (roles && !roles.includes(currentUser?.role)) {
    const targetHome = ROLE_HOME[currentUser?.role];
    // Redirect to correct home if role doesn't match
    return <Navigate to={targetHome || '/login'} replace />;
  }
  
  return children;
}

// Redirects authenticated users away from public pages (login/register)
export function PublicRoute({ children }) {
  const { isAuthenticated, currentUser } = useAuth();
  const location = useLocation();
  
  // If authenticated, redirect away from public pages only if we're on login/register
  if (isAuthenticated && currentUser && (location.pathname === '/login' || location.pathname === '/register')) {
    const targetHome = ROLE_HOME[currentUser.role];
    return <Navigate to={targetHome || '/'} replace />;
  }
  
  return children;
}
