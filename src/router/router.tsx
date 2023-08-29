import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/:id',
        element: '',
      },
    ],
  },
]);

export default router;
