import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'router/router';
import ErrorBoundary from 'utils/ErrorBoundary';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
