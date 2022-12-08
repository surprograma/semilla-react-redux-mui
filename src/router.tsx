import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FichaContacto from './features/contactos/FichaContacto';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contactos/:id', element: <FichaContacto /> },
    ],
  },
]);

export default router;
