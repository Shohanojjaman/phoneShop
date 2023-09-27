import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <>Home page</>,
      },
      {
        path: '/donation',
        element: <>This is donation page!</>,
      },
      {
        path: '/statistics',
        element: <>This is statistics page!</>,
      },
    ],
  },
]);

export default MainRoutes;
