import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Dashboard } from './components/pages/Dashboard';
import { EditData } from './components/pages/EditData';
import App from './App';

function checkIfUserLogged() {
  if (localStorage.getItem('userData')) {
    return redirect('/home');
  } else {
    return null;
  }
}

function checkIfUserNotLogged() {
  if (!localStorage.getItem('userData')) {
    return redirect('/');
  } else {
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
    loader: checkIfUserNotLogged,
  },
  {
    path: '/login',
    element: <Login />,
    loader: checkIfUserLogged,
  },
  {
    path: '/register',
    element: <Register />,
    loader: checkIfUserLogged,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: checkIfUserNotLogged,
  },
  {
    path: '/update-user',
    element: <EditData />,
    loader: checkIfUserNotLogged,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
