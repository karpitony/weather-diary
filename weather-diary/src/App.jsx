import { RouterProvider, createBrowserRouter } from 'react-router';
import GlobalStyle from "./styles/GlobalStyle";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Write from "./pages/Write";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/write', element: <Write /> },
      ],
    },
    {
      path: '*',
      element: (
        <NotFound />
      ),
    },
  ])

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
